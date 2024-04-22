import os
from openai import AzureOpenAI # type: ignore
    
client = AzureOpenAI(
    api_key="c53afac873314cbf994857f429fbd73f",  
    api_version="2024-02-01",
    azure_endpoint = "https://coding-assignment-2.openai.azure.com/"
    )
    
deployment_name='gpt-4-turbo' #This will correspond to the custom name you chose for your deployment when you deployed a model. Use a gpt-35-turbo-instruct deployment. 
    
# Send a completion call to generate an answer
print('Sending a test completion job')
start_phrase = 'Write a tagline for an ice cream shop. '
response = client.chat.completions.create(
            model=deployment_name, 
            messages = [{"role":"system", "content":"write a program to add two numbers in python"}])
print(response.choices[0].message.content)

response = client.chat.completions.create(
    model="gpt-35-turbo", # model = "deployment_name".
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Does Azure OpenAI support customer managed keys?"},
        {"role": "assistant", "content": "Yes, customer managed keys are supported by Azure OpenAI."},
        {"role": "user", "content": "Do other Azure AI services support this too?"}
    ]
)

print(response.choices[0].message.content)