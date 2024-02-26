import os
import re
import time
import vertexai
from vertexai.preview.generative_models import GenerativeModel, ChatSession
from vertexai.preview.generative_models import ResponseBlockedError


# TODO
# - add a grounded pass via PaLM?
# - function calling to validate code etc
 
project_id = "smcghee-cloud-demos"
location = "us-central1"
vertexai.init(project=project_id, location=location)

model = GenerativeModel("gemini-pro")
chat = model.start_chat()

def get_chat_response(chat: ChatSession, prompt: str) -> str:
    response = chat.send_message(prompt)
    return response.text

def print_chat_response(chat: ChatSession, prompt: str) -> None:
    print("-----------")
    print("# " + prompt)
    response = chat.send_message(prompt)
    print(response.text)

def make_valid_filename(s):
  # Replace all non-alphanumeric characters with underscores.
  s = re.sub(r"[^0-9A-Za-z_]+", "_", s)

  # Make sure the filename is not too long.
  if len(s) > 255:
    s = s[:255]

  return s

def initChat():
    chat = model.start_chat()
    
    # silently initialize
    #prompt = "Hello."
    #get_chat_response(chat, prompt)
    # prompt engineering
    failures = []
    prompt = "You're an expert in Site Reliability Engineering, Software Engineering, DevOps, and Platform Engineering. Please limit all responses to 200 words at a time."
    doPrompt(chat, prompt, failures)

    prompt = "For each term I ask about, please provide a definition in less than 200 words, and cite and link all examples or references as much as possible."
    doPrompt(chat, prompt, failures)

    return chat


def doPrompt(chat, prompt, failed):
    try:
        response = get_chat_response(chat, prompt)
    except ResponseBlockedError as e:
        print("Response blocked: %s - retrying once" % e)
        try:
            time.sleep(2)
            response = get_chat_response(chat, prompt)
        except ResponseBlockedError as e2:
            print("Response blocked: %s - bailing" % e)
            failed.append(prompt)
            return None

    except Exception as e:
        print("Exception: %s" % e)

    return response

def main():
    # get a response for each line in file:
    with open("topics.txt", "r") as f:
        lines = f.readlines()
    lines = [line.strip() for line in lines]

    #for line in lines:
    #for line in ['Automatic Rollbacks', "CI/CD"]:
    output = []
    failed = []
    for line in lines:
        if line == "" or line.startswith("#"):
            print ("skipping blank input")
            continue

        # check if file exists
        filename = "new/" + make_valid_filename(line) + ".md"
        if os.path.exists(filename):
            print("The file %s already exists." % filename)
            continue
        else:
            print("The file %s does not exist." % filename)
        
        
        # reset history, output, prompt eng
        chat = initChat()
        output = [] 

        # Title
        title = "# %s\n\n" % line
        output.append(title)
        prompt = line
        print ("--> asking: %s" % prompt)
        response = doPrompt(chat, prompt, failed)
        if response == None: 
            continue
        output.append(response)

        output.append("\n\n## " + "Related Tools and Products" + "\n\n")
        prompt = "Give me some tools or products that can help with " + line + ".  please describe and link to all tools or resources listed."
        response = doPrompt(chat, prompt, failed)
        if response == None: 
            continue
        output.append(response)

        output.append("\n\n## " + "Related Terms" + "\n\n")
        prompt = "What are some related terms?"
        response = doPrompt(chat, prompt, failed)
        if response == None: 
            continue
        output.append(response)

        output.append("\n\n## " + "Prerequisites" + "\n\n")
        prompt = "What needs to be in place before you can do " + line + "?"
        response = doPrompt(chat, prompt, failed)
        if response == None: 
            continue
        output.append(response)

        output.append("\n\n## " + "What's next?" + "\n\n")
        prompt = "After you have " + line + ", what comes next?"
        response = doPrompt(chat, prompt, failed)
        if response == None: 
            continue
        output.append(response)

        # write this out to a file:
        with open(filename, "a") as f:
            f.writelines(output)
        f.close()

    for failure in failed:
        print ("Failed: %s" % failure)

if __name__ == "__main__":
    main()
