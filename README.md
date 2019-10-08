# Front End React Evaluation
This is a project to evaluate prospectus employees on their knowledge of react and
other FE principles.

## Starting Up Env
This project was created using create react app so to get the initial app
up and running should be as easy as:


Inside the root directory
1) run ``yarn install``
2) run ``yarn start``


## Tasks

### Forms
To demonstrate your ability with forms you should start by creating a 
basic login form on the first page. The form should be able to handle a "username" and 
"password" fields with their corresponding states (bonus points for styling). Once the form is submitted the username 
should be saved in a redux store.

## Routing
Once the user is "authenticated" direct them to a page with a nav bar to "Home", "Interests"
and "Skills". To start when you click on each of the links the nav bar should remain with the current
page highlighted in some manner and the body of the page signifying what page the person is on.

## Http Requests
On the Skills and Interests pages make a request to the server the app is running on (should be 
http://localhost:3000/) and no matter what the server returns return the mock data set in fakeInterests
and fakeSkills for the skills page and interests page respectively (variables can be found in dummy-data.js)
Extra credit if you then store the results in component state, Extra extra credit if store in some sort of redux store state

## Display Data
1) Some where in the nav bar display the users username that was entered on the login page.
2) On the Home page display the message "Hello {username}, this site shows all of your skills and interests" replacing
username with the username the user input on the login page. Bonus points if you can style this very bland page in an 
appealing way.
3) On the Skills and Interests pages display the data your retrieved from the Http Requests section.

