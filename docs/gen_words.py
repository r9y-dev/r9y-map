import vertexai
from vertexai.preview.generative_models import GenerativeModel, ChatSession

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
    prompt = "Hello."
    print(get_chat_response(chat, prompt))
    # prompt engineering
    prompt = "You're an expert in Site Reliability Engineering, Software Engineering, DevOps, and Platform Engineering."
    print(get_chat_response(chat, prompt))

    prompt = "For each term I ask about, please provide a definition in less than 200 words, and cite examples or references as much as possible."
    print(get_chat_response(chat, prompt))

    return chat

# get a response for each line in file:
with open("topics.txt", "r") as f:
    lines = f.readlines()
lines = [line.strip() for line in lines]

#for line in lines:
#for line in ['Automatic Rollbacks', "CI/CD"]:
output = []
for line in lines:
    
    # reset history, output, prompt eng
    chat = initChat()
    output = [] 

    # Title
    title = "# %s \n" % line
    output.append(title)
    prompt = line
    print ("--> asking: %s" % prompt)
    response = get_chat_response(chat, prompt)
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
    filename = "new/" + make_valid_filename(line) + ".md"
    with open(filename, "a") as f:
        f.writelines(output)
    f.close()


# TODO
# - add a grounded pass via PaLM?
# - function calling to validate code etc
# 