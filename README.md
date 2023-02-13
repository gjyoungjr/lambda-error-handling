# ❌ Lambda Error Handling 

<!-- ABOUT THE PROJECT -->

## About The Project

This project demonstrates how to gracefully handle Lambda Errors in an asynchronous world using Amazon Simple-Queue-Service and Dead-Letter Queues. 


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow the simple steps below.

### Prerequisites

1. Install the [Serverless Framework CLI](https://www.serverless.com/framework/docs/getting-started) via NPM:
  ```bash
  npm install -g serverless
  ```

### Installation
The below steps explains how to install and set up the application.

1. Clone the repo
   ```bash
   git clone https://github.com/gjyoungjr/lambda-error-handling
   ```
2. Install NPM packages
   ```bash
   npm install
   ```
3. Enter your AWS Access Key ID and Secret Access Key in an env file `.env`
   ```js
    AWS_ACCESS_KEY_ID=<ACCESS_KEY_ID>
    AWS_SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY>
   ```
### Deployment 
  ```bash 
  sls deploy --verbose
  ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
