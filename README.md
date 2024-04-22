This application takes a query from the user and uses OpenAI's API to get responses from GPT 4 and GPT 3.5 to compare the answers between them

# How to run the application

The server and client have to be started seperately. First start the server and then the client. Instructions for the same are mentioned below.

## Server

Make sure to have python installed on your workstation/pc. Navigate to the server folder. In the project directory, you can run:

### `pip install -r requirements.txt`
### `flask run`

This should start the server component of the application\

## Client

Make sure to have node and npm installed on your workstation/pc. Navigate to the client folder. In the project directory, you can run:

### `npm install`
### `npm start`

This should start the client component of the application\

After this you can use the application normally. Type in the query on the search bar and once submitted it will take a few seconds for the answer to load for both the models.