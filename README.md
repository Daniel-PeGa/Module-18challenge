# Module-18challenge - NoSQL Social Network API

This project shows a database built with MongoDB for a social network in which you can add freinds, create a profile, add 'thoughts' and reactions

## Project Description

In this project, a social network was built without SQL, but rather MongoDB, as the database, in which you can create a profile with a username and email, as well as create 'thoughts' and reactions. 

## Technologies Used

* Moment
* MongoDB
* Express

## Install and Run

It's super easy to make it work! just clone it in github with this link on your terminal with the command 'git clone [here is where you will insert the link :)]'
https://github.com/Daniel-PeGa/Module-18challenge.git

Once you have cloned it and opened it on your VS Code, you open the integrated terminal and type the following commands:
* npm i
* npm start

And thats it!!!

## How to use it?

Just watch the following video run-through:
[INSERTA EL VIDEO AQUI!]

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
