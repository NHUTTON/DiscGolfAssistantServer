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
