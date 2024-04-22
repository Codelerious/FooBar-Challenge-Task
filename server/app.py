from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS, cross_origin # type: ignore
from openai import AzureOpenAI # type: ignore

app = Flask(__name__)
cors = CORS(app)

client = AzureOpenAI(
    api_key="c53afac873314cbf994857f429fbd73f",  
    api_version="2024-02-01",
    azure_endpoint = "https://coding-assignment-2.openai.azure.com/"
    )

@app.route("/")
def hello_world():
    return 'This is a test API call!'


@app.route('/gpt-35', methods=["POST"])
@cross_origin()
def getGpt35Response():
     input_json = request.get_json(force=True) 
     response = client.chat.completions.create(
            model="gpt-35-turbo", 
            messages = [{"role":"system", "content":input_json['query']}])
     dictToReturn = {'answer':response.choices[0].message.content}
     return jsonify(dictToReturn)


@app.route('/gpt-4', methods=["POST"])
@cross_origin()
def getGpt4Response():
     input_json = request.get_json(force=True) 
     response = client.chat.completions.create(
            model="gpt-4-turbo", 
            messages = [{"role":"system", "content":input_json['query']}])
     dictToReturn = {'answer':response.choices[0].message.content}
     return jsonify(dictToReturn)