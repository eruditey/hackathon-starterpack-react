

[![Build Status](https://travis-ci.org/rupshabagchi/hackathon-starterpack-react.svg?branch=master)](https://travis-ci.org/rupshabagchi/hackathon-starterpack-react)

# Hackathon starter boilerplate

This is a customizable static boilerpate app using React, to enable quick protoyping during hackathons. It provides the basic setup including declarative routing to quickly get started on the front end.


## Features

* React Routers
* Premade components
* General layout of a react app
* Basic frontend dashboard
* Yarn integration
* Deployment (Heroku, gh-pages, express, firebase)


## App setup

Supports deployment using firebase/heroku/github pages

### On development mode

``` 
cd hackathon-starterpack-react
npm install
npm start
``` 

or using **yarn**
``` 
npm install -g yarn
yarn   
yarn run
# If this throws an error saying 'node' not found, then most probably the bin is called nodejs. 
# Make a simlink 
# ln -s /usr/bin/nodejs /usr/bin/node

```



or using **Express** (server.js)

### On Firebase

``` 
  npm install -g firebase-tools
  firebase login
  firebase init
  firebase deploy
  
```

### On Heroku

```
heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master
heroku open
```

To deploy to `gh-pages` this very useful npm script [deploy-to-gh-pages](https://www.npmjs.com/package/deploy-to-gh-pages) can be used. 
