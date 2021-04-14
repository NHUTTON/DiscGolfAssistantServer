<h1 align="center">Disc Golf Assistant Server</h1>
<hr/>

Hello and welcome to the Disc Golf Assistant Application Server! This app acts as a personal caddy book/journal for disc golfers. A user can sign up with an account (username must include at least one number and 5 characters), create a personalized list of courses from a hosted database and add a single comment for each course, with no text limit. Idealy you could have a descriptive comment for each hole of the course and update it throughout your round or whenver you feel like. This appliaction is deployed to Heroku where it has a corresponding server that holds over 20 courses in the state of Indiana. At (https://github.com/NHUTTON/DiscGolfAssistantClient), you can check out the coresponding github client link to use with this server. The current deployed version in heroku is at (https://nwh-disc-golf-assistant-client.herokuapp.com/).

This server acts as an API database that can store specific information for disc golf courses. There are admin capabilities built into the server so an Admin may add any course to the database. 

Users are able to create and account that holds their first and last name, as well as a username and password for logging in. 
When a user logs in, a session token is created that is stored for 24 hours, or until the user logs out. 

There is a "Course" controller that is specifically created for the admin to be able to Create, Update, Edit and Delete courses from the main database.

There is a "MyCourse" controller that allows users to capture the information from the courses, stored in the database, and store it for their own account and leave a "review".

Check out the index.js in the models folder to see how each of the models are associated with each other. 
      <li> Users can have many "myCourses" </li>
      <li> Courses can have many "myCourses"</li>

<hr/>
<h3 align="center">If you have any general questions or want to contact me please email me at nickolashutton@gmail.com.<h3>
<hr/>

# Project: DGA

## End-point: Register
### Description: 
Method: POST
>```
>http://localhost:4000/user/register
>```
### Body (**raw**)

```json
{
    "user": {
        "firstname": "Nick",
        "lastname": "Hutton",
        "username": "Nhutton",
        "password": "Iamtheadmin94",
        "admin": true
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Login
### Description: 
Method: POST
>```
>http://localhost:4000/user/login
>```
### Body (**raw**)

```json
{
    "user": {
        "username": "Nhutton",
        "password": "Iamtheadmin94"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Get Users
### Description: 
Method: GET
>```
>http://localhost:4000/user/userinfo
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Make a new Course
### Description: 
Method: POST
>```
>http://localhost:4000/course/create
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|


### Body (**raw**)

```json
{
    "course": {
        "image": "https://i.imgur.com/eQHVDuy.jpg",
        "name": "The_Test_Local",
        "city": "The Test",
        "state": "IN",
        "holes": "18",
        "distance": 6138,
        "tee": "concrete"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Get all Courses
### Description: 
Method: GET
>```
>http://localhost:4000/course/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Get Course by name
### Description: 
Method: GET
>```
>http://localhost:4000/course/Rum_Village_Park
>```
### Headers

|Content-Type|Value|
|---|---|
|||



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update course info
### Description: 
Method: PUT
>```
>http://localhost:4000/course/update/cf951dfa-85d6-492f-a760-fb1df0abdb39
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|


### Body (**raw**)

```json
{
    "course": {
        "image": "Test Image",
        "name": "The Admin Update",
        "city": "Test City Update",
        "state": "IN",
        "holes": "10",
        "distance": 9000,
        "tee": "concrete"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete a Course
### Description: 
Method: DELETE
>```
>http://localhost:4000/course/delete/cf951dfa-85d6-492f-a760-fb1df0abdb39
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Add course to My List
### Description: 
Method: POST
>```
>http://localhost:4000/mycourses/create
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|


### Body (**raw**)

```json
{
    "mycourse": {
        "review": "test course",
        "courseId": "64e703ba-7c0e-4240-8a0f-e8da42f6c71e"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Get MY course list
### Description: 
Method: GET
>```
>http://localhost:4000/mycourses/mine
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update my course
### Description: 
Method: PUT
>```
>http://localhost:4000/mycourses/change/629a2554-86e3-4487-9ffb-162ed1da7395
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzMzA0MGJhLWQ4YjEtNDZiZC04MWY2LTY1NzdiYzMyZWVhMyIsImlhdCI6MTYxODI0Mjc1MywiZXhwIjoxNjE4MzI5MTUzfQ.yBup1sceQoRvIfEehkE_C4pEgDtAfil0avyGWVZqbgo|


### Body (**raw**)

```json
{
    "mycourse": {
        "review": "this course has been updated!!!!"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete a course from my list
### Description: 
Method: DELETE
>```
>http://localhost:4000/mycourses/delete/845fe1ad-0e9e-45f0-8bcb-3cfa42235057
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE3NDliZWIyLTI3ZGMtNDA5OS05Yjc5LTQ1ZjA4ZjE3NzIxNSIsImlhdCI6MTYxODA2NjM0NSwiZXhwIjoxNjE4MTUyNzQ1fQ.J-XMtxXYcZmox5JdoZuQGw3KW2vazPC7X-IekzKJ0Zg|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete a user
### Description: 
Method: DELETE
>```
>http://localhost:4000/user/delete/05267d5a-5137-47b1-ac50-dde2cb7ff477
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRjMWUwMjZjLTQ0M2YtNDljOC1hZDc2LWYxODNiYTU4Y2E4MSIsImlhdCI6MTYxODA3ODk2NiwiZXhwIjoxNjE4MTY1MzY2fQ.F2XakQxWDdn_xdnUYpnkXBUUziGo7gU_j91EIwKYn2I|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

_________________________________________________
Author: [bautistaj](https://github.com/bautistaj)

Package: [postman-to-markdown](https://github.com/bautistaj)

