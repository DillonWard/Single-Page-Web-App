# Single Page Web App
=======
## Introduction
The following repository contains code for a third-year undergraduate project for the module Data Representation and Querying. The mopdule is taught to undergraduate students at GMIT in the Department of Computer Science and Applied Physics. The lecturer is Ian McLoughlin.

## Project Overview
For my project I have decided to make a simple Block Breaker game that allows users to store high scores and their names and call it from a server to display, all hosted on a single page - a single page web app. 
The game is simple - the user has 3 lives and must break blocks with a ball and paddle, if they lose all three lives they can store their name and highscore. This choice was easy for me because I had been using physics with balls (making them boucne off of a canvas) in another module so I could start from there.
My initial plan was to make the game first, then later add the server to store the information in.

## How to run the application
The application was written using [Flask](http://flask.pocoo.org/), [CouchDB](http://couchdb.apache.org/) and [Python 3](https://www.python.org). Ensure that they are installed before running the application.

To run the application, open [CMDER](http://cmder.net/) and change the directory to the folder where the [webapp.py is found](http://prntscr.com/ddu5fo). Once you've done this, you can run the application locally:
```bash
$ py webapp.py
```

Once the application is running, it can be accessed by entering into your browser http://127.0.0.1:4000/ after which the game will be visible and everything is up and running!