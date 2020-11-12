# Almabase Engineering Intern Task

This project is my submission for the <b>Almabase Engineering Intern Task</b> by Almabase.

### Live Demo

A live demo of this project is deployed on heroku [here](https://githubtaskalmabase.herokuapp.com/).

### Tech Stack

<b>Node.js:</b>
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

<b>Express.js:</b>
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for APIs.

<b>Bootstrap:</b>
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.

<b>HTML5:</b>
HTML5 is a markup language used for structuring and presenting content on the World Wide Web

### Installation

You must have [Node.js](https://nodejs.org/) version 10.x installed in order to run this.

#### For node version

```sh
node -v
```

Install the dependencies and start the server.

```sh
$ cd Almabase_Project
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

##### Returns top n repositories and its top m contributor for an organisation

```
GET /api/org
```

    Query Parameters

    Name                    Description
    orgName                 string
    n                       number
    m                       number

#####curl example

```
curl --location --request GET 'http://localhost:4000/api/org?orgName=google&n=1&m=5'
```

#####response

```json
[
  {
    "repo": "dagger",
    "contributors": [
      {
        "name": "ronshapiro",
        "avatar": "https://avatars2.githubusercontent.com/u/792797?v=4",
        "url": "https://github.com/ronshapiro",
        "commits": 645
      },
      {
        "name": "cgruber",
        "avatar": "https://avatars0.githubusercontent.com/u/331234?v=4",
        "url": "https://github.com/cgruber",
        "commits": 476
      },
      {
        "name": "netdpb",
        "avatar": "https://avatars0.githubusercontent.com/u/4306377?v=4",
        "url": "https://github.com/netdpb",
        "commits": 357
      },
      {
        "name": "bcorso",
        "avatar": "https://avatars1.githubusercontent.com/u/2928034?v=4",
        "url": "https://github.com/bcorso",
        "commits": 225
      },
      {
        "name": "gk5885",
        "avatar": "https://avatars2.githubusercontent.com/u/2279476?v=4",
        "url": "https://github.com/gk5885",
        "commits": 215
      }
    ]
  }
]
```

### Improvements / Future scope / Thing's I would have done if alotted more time

1. Github login: User can login to his/her github account, this will remove the 60 requests an hour limit.
