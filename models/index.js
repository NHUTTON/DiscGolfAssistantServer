const db = require('../db');
const UserModel = require('./user');
const CourseModel = require('./courses') 
const myCoursesModel = require('./myCourses');

UserModel.hasMany(myCoursesModel);
myCoursesModel.belongsTo(UserModel);

CourseModel.hasMany(myCoursesModel);
myCoursesModel.belongsTo(CourseModel);

// CommentsModel.belongsTo(MyCoursesModel);
// CommentsModel.belongsTo(UserModel);

module.exports = {
    dbConnection: db,
    models: {
        UserModel,
        CourseModel,
        myCoursesModel,
    } 
};