# Jello
[Jello](https://jello-io.herokuapp.com/) is a Trello clone crafted using technologies such as React / Redux / Flask / and Python to provide users with a simple user interface designed to make tracking tasks a breeze. 

<img src='https://res.cloudinary.com/dedpxzbak/image/upload/v1640805060/Jello-io_n3agu1.png'>

## Getting started

1. Clone this repository (only this branch)

   ```bash
   https://github.com/codenamerick/aa-capstone-jello-app.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Now let's get your front end up and running; you will need a separate terminal to run the frontend react-redux web app
   ```bash
   cd ./react-app
   ```
   ```bash
   npm install
   ```
7. Once dependancies are installed, run the app
   ```bash
   npm start
   ```
8. navigate to localhost in your web browser to start using Jello-io

## Using the App

* From the landing page you can create an account or simply use our "Demo User" feature to login instantly

* Once logged in you can create a new Board using the plus button to the right or above in the dashboard nav

* With your own board created, you can now add lists using the "Create New List" button on the right of your board canvas

## Tech Stack 


* Javascript

* React JS

* Redux

* Python

* SQL Alchemy

* Alembic

* HTML

* CSS

## Featured Code

