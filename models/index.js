const db = require('../db');
const UserModel = require('./user');
const CourseModel = require('./courses') 
const myCoursesModel = require('./myCourses');


UserModel.hasMany(CourseModel);
UserModel.hasMany(myCoursesModel);
CourseModel.belongsTo(UserModel);

CourseModel.hasMany(myCoursesModel);
myCoursesModel.belongsTo(CourseModel);
myCoursesModel.belongsTo(UserModel);

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