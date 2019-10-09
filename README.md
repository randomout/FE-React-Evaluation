# Front End React Evaluation
This is a project to evaluate prospectus employees on their knowledge of react and
other FE principles.

## Starting Up Env
This project was created using create react app so to get the initial app
up and running should be as easy as:


Inside the root directory
1) run ``yarn install``
2) run ``yarn start``

## Mockups
Here are the mockups for this project: https://1uci4i.axshare.com/#id=5xmohz&p=login&g=1

Follow these as diligently as possible. Bonus points if you can come up with and or execute ideas to make 
the project responsive.

## Tasks

### Forms
To demonstrate your ability with forms you should start by creating a 
basic login form on the first page. The form should be able to handle a "username" and 
"password" fields with their corresponding states, there should be basic validation on the fields (see mockups for basic styling).
Once the form is submitted the username should be saved in a redux store.

## Routing
Once the user is "authenticated" direct them to a page with a nav bar to "Home", "Interests"
and "Skills". To start when you click on each of the links the nav bar should remain with the current
page highlighted in some manner and the body of the page signifying what page the person is on.

## Http Requests
On the Home page (once "logged in") make a request to the server the app is running on (should be 
http://localhost:3000/) and no matter what the server returns return the mock data set in fakeInterests
and fakeSkills (variables can be found in dummy-data.js)
The results should be stored in some type of state (whichever makes it easiest to complete all the tasks)

## Display Data
1) Some where in the nav bar display the users username that was entered on the login page.
2) On the Home page display the message "Welcome {username}" replacing
username with the username the user input on the login page. Below that display all results from the requests (as represented in mockups) 
3) On the Skills and Interests pages display just the objects corresponding to the appropriate page. 

## Routing +
When you click on an interest or a skill you will be routed to a page that also shows the detail attribute 
of that particular skill or interest (much like in the mockup).

