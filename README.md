# Almabase Engineering Intern Task
This project is my submission for the <b>Almabase Engineering Intern Task</b> by Almabase.

### Live Demo

A live demo of this project is deployed on heroku [here](https://githubtaskalmabase.herokuapp.com/).

### Tech Stack

  <b>Node.js</b>
    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    <b>Express.js</b>
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for APIs.
    <b>Bootstrap</b>
    Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
    <b>HTML5</b>
    HTML5 is a markup language used for structuring and presenting content on the World Wide Web
  
    

### Installation

You must have [Node.js](https://nodejs.org/) version 10.x installed in order to run this.

#### For node version

```sh
node -v
```

Install the dependencies and start the server.

```sh
$ cd almabasetask
$ npm install
$ npm start

```
The project can then be viewed at http://localhost:4000/

### Project Structure

```
	├─ .gitignore
	├─ Procfile
	├─ README.md
	├─ app.js
	├─ common
	│ └─ config.js
	├─ controller
	│ ├─ helper
	│ │ └─ githubcall.js
	│ └─ organisation.js
	├─ package-lock.json
	├─ package.json
	├─ public
	│ ├─ index.html
	│ ├─ index.js
	│ └─ styles.css
	└─ route
	└─ organisation.js
```
### API


### Improvements / Future scope / Thing's I would have done if alotted more time

1. Github login: User can login to his/her github account, this will remove the 60 requests an hour limit.

