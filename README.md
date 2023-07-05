<h1> Steps you need to follow: </h1>

## Installation
<p>1- Download Ngrok for secure webhook tunnel that will be used in shopify API.</p>
<p>2- if you want to use webhooks then either let me know so I can add your ngrok tunnel URL to shopify webhooks or else you will need to create your own shopify partner account and store replace store_API url and access token in .env file to use your own store and then add the ngrok tunnel url in notifications webhooks of your store</p>
<p>3- Download and install postgreSQL.</p>

## Set up Database
Open SQL shell and run these commands by order:

1- ```CREATE USER test_user WITH PASSWORD '1234';```
<br/>

2- ```CREATE DATABASE shopify_test WITH OWNER = test_user```
<br/>

<p>3- Update your .env file accordingly.</p>

## Set up Ngrok tunnel for webhooks
Ngrok is used to redirect all the user traffic in the internet to your local network address. This is important for webhooks in local enviroment. 
Once you install ngrok run this command in your ngrok terminal to start it:
```bash
$ ngrok http 3000 
```
Then copy the gennerated tunnel URL It will be something like this ```https://f98c-223-123-95-88.ngrok-free.app```
<p>Add this tunnel URL to your shopify store webhooks notifications if you are using your own store. If not then you can ping me I will add it to the already configured store.</p>

## Running the app

Install the dependencies
```bash
$ yarn install
```
Start the server
```bash
$ yarn start
```
