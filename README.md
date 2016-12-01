# Single Page Web App

## Introduction
The following repository contains code for a third-year undergraduate project for the module Data Representation and Querying. The module is taught to undergraduate students at GMIT in the Department of Computer Science and Applied Physics. The lecturer is Ian McLoughlin.


## Project Overview
##### *Author: Dillon Ward*
For my project I have decided to make a simple Block Breaker game that allows users to store high scores and their names and call it from a server to display, all hosted on a single page - a single page web app. 
The game is simple - the user has 3 lives and must break blocks with a ball and paddle, if they lose all three lives they can store their name and highscore. This choice was easy for me because I had been using physics with balls (making them boucne off of a canvas) in another module so I could start from there.
My initial plan was to make the game first, then later add the server to store the information in. I decided to make a game because I had previously been working with physics in Graphics Programming, making a ball bounce around a canvas - I thought I could build off of that and make a game as I found it interesting and exciting.

#### The Initial Game
Once I had the ball bouncing off the canvas, I added a paddle that could move from left to right on a canvas - the Y position of the paddle is fixed, the X can be changed by pressing the left or right keys. I then had the ball bounce off the paddle the same way it bounces off the walls.
Then I added small squares to the canvas that the ball bounced off of as it did to the paddle, except if a collision is detected the square is deleted and removed from the screen.

#### Functionalities
Within the function for the blocks being removed, a variables named "score" would incrememnt by 25 - each time a block is removed, +25 to the score.
If the ball hit the bottom of the canvas, a variable called "lives" would decrement by 1. Both the score and lives are displayed on the screen while the game is played.
If the all the Blocks are removed from the screen OR if the lives reaches 0 the screen is cleared.
Later on an input box was added to the top of the screen where a player could enter their name - they cannot submit their name until the game ends. Once they enter their name, the score they are on and the name entered are stored in variables.

#### Database
The Database used in the application is CouchDB. I decided to use CouchDB because of its simplicity as I was - ititially - going to be storing just a name and a score.
##### How the Database works
The name and score is saved and stored as variables. Those variables are sent to a JS file (main.js) where empty variables are waiting to grab the information that is taken in and sent. Once the variables are stored within the JS file, they are passed through an [Ajax](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started) call and stored to a database using a POST method. The information is stored and sent to the database through Python. The information is then taken in from the database, through Python, and posted onto the HTML file 'High Scores' which is accessed through the navigation bar.

#### Routing
Once a button was pressed was called in the navigation bar, it would go to a route which would call a different HTML file.
> Route('/') loaded Index.html, ('/') loaded Scores.html

Inside the routing file, the databases are initialized and specified by name. Data stored in the form of variables are then sent and saved in the database as independent documents.

## How to run the application
### Technologies Used
* [Flask](http://flask.pocoo.org/)
* [CouchDB](http://couchdb.apache.org/)
* [Python 3](https://www.python.org)

To run the application, open [CMDER](http://cmder.net/) and change the directory to the folder the webapp.py [location](http://prntscr.com/ddu5fo). Once you've done this, you can run the application locally:
```
$ py webapp.py
```

Once the application is running, it can be accessed by entering into your browser http://127.0.0.1:4000/ after which the game will be visible and everything is up and running!

> Any technologies mentioned below should be installed prior to running the application.

### Flask
Flask is a web framework that is designed to support the development of web applications - provides the user with tools and libraries. Flask does not require particular tools or libraries, so it can be imported, installed and used right away. Flask is part of the categories of the micro-framework. Micro-framework are normally framework with little to no dependencies to external libraries.

* Pros
 *  The Framework is light
 *  Little dependency to update and watch for secuirty bugs
* Cons
 * Increase dependencies through plugins
 
##### Installation 
Before installing Flask, ensure that Python is installed.
Once you have Python installed, you can install Flask with the command:
```
$ pip install Flask
```

### CouchDB
Apache CouchDB is an open source database that allows you to store and return data easily. Data is stored on your own servers that are hosted locally. Unlike a relational database, a CouchDB database does not store data and relationships in tables. Instead, each database is a collection of independent documents.

* Pros
 *  Simplicity
 *  Querying data is seperated from the data itself

* Cons
 * Arbitrary queries are expensive

##### Installation 
First, go to the [CouchDB](http://couchdb.apache.org/) website and download the CouchDB installer compatible with your version of Windows/Machine.
Once that's finished installing, use the command:
```
$ pip install Flask
```

### Python 3
Python is an interpreted, interactive, object-oriented, widely used programming language that emphasizes code readability. Python is generally used for web development. Using Python commands you can create, update, store and retrieve data from a database.

* Pros
 *  Easy to read
 *  Concise - does not take long to code something

* Cons
 * Slower than Java

##### Installation
To install **Python 3**, go to the official [Python](https://www.python.org/downloads/) website and install it. Let the installation run and you can install Flask.

## Conclusion
In conclusion, I found that CouchDB is very useful and simple if you are only sending simple data - such as a name and score as I did, easy to store and display. I found writing the game in raw JS easy because I had previously written some code that was related to what I was doing in my project. Even so, I feel it would be more beneficial for me to write the game in another version of JS that I could learn more from scripting. Writing the game was the easy part because of the way I wrote it, the difficulty came with representing the data.

###### *Dillon Ward - GMIT- Galway*
