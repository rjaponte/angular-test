# AngularMaterialPwaSsr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

The project uses [Angular Universal](https://angular.io/guide/universal) and [Service Workers](https://angular.io/guide/service-worker-intro) to show server side rendering (ssr) and PWA.

In addition it also uses [Angular Material](https://material.angular.io/) for most of the UI.

## Prerequisites

### Node
Download [Node](https://nodejs.org/). Make sure that it's on your path by running `node --version` or `npm --version`.

### MongoDB
This does MongoDB to show how API calls to backend work with a database.

Download from [MongoDB](https://www.mongodb.com/download-center/community) - make sure it's the community.

If you are using a mac and have homebrew installed use [MongoDB Brew Install](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Confirm that installation works and is on your path by running `mongod`, be aware that if you didn't create the data folder it will fail.

### Angular CLI (optional)

Once you have node installed, you can also install the Angular CLI by running `npm install -g @angular/cli`.

This is optional if you want to have the recommended tool to add additional pieces to the project.

## Installation

Run `npm install`.

## Run Locally

Run `npm run build:ssr && npm run serve:ssr` in a terminal.

Once it's complete you should be able to see the site at http://localhost:8000.

If you want to see some messages run the following command if you have curl.

```
curl -H "Content-Type: application/json" -d '{"groupId": 1,"message": {"messagetext": "This is a different test message","timestamp": "2019-01-03T11:37:00"},"users": [{"firstName": "Ricardo", "number": "8055872684", "color": "red"}]}' http://locahost:8000/api/messages
```

## License
This is licensed under the [MIT License](LICENSE)