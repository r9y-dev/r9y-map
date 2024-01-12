import os
import time
import vertexai
from vertexai.preview.generative_models import GenerativeModel, ChatSession
from vertexai.preview.generative_models import ResponseBlockedError

# TODO(developer): Update and un-comment below lines
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
  """
  Make a string a valid filename.

  Args:
    s: The string to make valid.

  Returns:
    A valid filename.
  """

  # Replace all non-alphanumeric characters with underscores.
  s = s.replace(r"[^0-9A-Za-z_]+", "_")

  # Make sure the filename is not too long.
  if len(s) > 255:
    s = s[:255]

  # Make sure the filename does not start with a number.
  if s[0].isdigit():
    s = "_" + s

  return s

def initChat():
    chat = model.start_chat()
    
    # silently initialize
    #prompt = "Hello."
    #get_chat_response(chat, prompt)
    # prompt engineering
    prompt = "You're an expert in Site Reliability Engineering, Software Engineering, DevOps, and Platform Engineering."
    get_chat_response(chat, prompt)
    prompt = "For each term I ask about, please provide a definition in less than 200 words, and cite examples or references as much as possible."
    get_chat_response(chat, prompt)

    return chat

# get a response for each line in file:
with open("topics.txt", "r") as f:
    lines = f.readlines()
lines = [line.strip() for line in lines]

#for line in lines:
#for line in ['Automatic Rollbacks', "CI/CD"]:
output = []
for line in lines:
    if line == "" or line.startswith("#"):
        print ("skipping blank input")
        continue

    if line == "Smoke Tests":
        print ("skipping Smoke Tests for Reasons")
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
    title = "# %s \n" % line
    output.append(title)
    prompt = line
    print ("--> asking: %s" % prompt)
    try:
        response = get_chat_response(chat, prompt)
    except ResponseBlockedError as e:
        print("Response blocked: %s" % e)
        wait_time = 2
        print("Waiting for %s seconds" % wait_time)
        time.sleep(wait_time)
        response = get_chat_response(chat, prompt)
    except Exception as e:
        print("Exception: %s" % e)
    output.append(response)

    output.append("## " + "Related Tools and Products" + "\n")
    prompt = "Give me some tools or products that can help with " + line + "."
    output.append(get_chat_response(chat, prompt))

    output.append("## " + "Related Terms" + "\n")
    prompt = "What are some related terms?"
    output.append(get_chat_response(chat, prompt))

    output.append("## " + "Prerequisites" + "\n")
    prompt = "What needs to be in place before you can do " + line + "?"
    output.append(get_chat_response(chat, prompt))

    output.append("## " + "What's next?" + "\n")
    prompt = "After you have " + line + ", what comes next?"
    output.append(get_chat_response(chat, prompt))

    # write this out to a file:
    with open(filename, "a") as f:
        f.writelines(output)
    f.close()


# TODO
# - add a grounded pass via PaLM?
# - function calling to validate code etc
# 