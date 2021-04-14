<h1 align="center">Disc Golf Assistant Server</h1>
<hr/>

Hello and welcome to the Disc Golf Assistant Application Server! This app acts as a personal caddy book/journal for disc golfers. A user can sign up with an account (username must include at least one number and 5 characters), create a personalized list of courses from a hosted database and add a single comment for each course, with no text limit. Idealy you could have a descriptive comment for each hole of the course and update it throughout your round or whenver you feel like. This appliaction is deployed to Heroku where it has a corresponding server that holds over 20 courses in the state of Indiana. At (https://github.com/NHUTTON/DiscGolfAssistantClient), you can check out the coresponding github client link to use with this server. The current deployed version in heroku is at (https://nwh-disc-golf-assistant-client.herokuapp.com/).

This server acts as an API database that can store specific information for disc golf courses. There are admin capabilities built into the server so an Admin may add any course to the database. 

Users are able to create and account that holds their first and last name, as well as a username and password for logging in. 
When a user logs in, a session token is created that is stored for 24 hours, or until the user logs out. 

There is a "Course" controller that is specifically created for the admin to be able to Create, Update, Edit and Delete courses from the main database.

There is a "MyCourse" controller that allows users to capture the information from the courses, stored in the database, and store it for their own account and leave a "review".

Check out the index.js in the models folder to see how each of the models are associated with each other. 
      - Users can have many "myCourses"
      - Courses can have many "myCourses"

If you have any general questions or want to contact me please email me at nickolashutton@gmail.com.
