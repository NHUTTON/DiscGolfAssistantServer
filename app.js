require('dotenv').config();

const Express = require('express');
const dbConnection = require("./db");
const controllers  = require('./controllers');
const middleware = require('./middleware');
const app = Express();


app.use(middleware.CORS);
app.use(Express.json());

app.use('/user', controllers.usersController)
app.use('/course', controllers.courseController)
app.use(middleware.validateJWT);
app.use('/mycourses', controllers.myCourseController)

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(4000, () => {
            console.log(`[Server]: App is listening on 4000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });
