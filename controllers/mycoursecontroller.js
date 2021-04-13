const Express = require('express');
const router = Express.Router();
let {validateJWT} = require("../middleware");
const {models} =require('../models')


router.post('/create', validateJWT, async (req, res) => {
    const {review, courseId} = req.body.mycourse
    try {
        await models.myCoursesModel.create({
            review: review,
            courseId: courseId,
            userId: req.user.id
        })
        .then(mycourse => {
                res.status(201).json({
                    mycourse: mycourse,
                    message: "Course added to your list!"
                })
            }
        )
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: `Failed to add course to your list: ${err}`
        })
    }
}) 

//GET ALL MY SAVED COURSES 

router.get("/mine", validateJWT, async (req,res) => {
    let {id} = req.user;
    try {
        const userCourseList = await models.myCoursesModel.findAll({
            where: {
                userId: id
            }, 
            include: {
                model: models.CourseModel
            }
        });
        res.status(200).json(userCourseList);
    } catch (err) {
        res.status(500).json({error: err});
    }
});



// UPDATE A COURSE IN MY SAVED COURSES

router.put("/change/:id", validateJWT, async (req, res) => {
    const {review} = req.body.mycourse;
    const mycourseId = req.params.id;
    const userId = req.user.id
    try {
        const query = {
            where: {
                id: mycourseId,
                userId: userId
            }
        };
        const updatedmyCourse = {
                review: review
        };
        const update = await models.myCoursesModel.update(updatedmyCourse, query);
        res.status(200).json(update);
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err});
    }
})

// DELETE A COURSE FROM MY LIST

router.delete("/delete/:id", validateJWT, async (req, res) => {
    const mycourseId = req.params.id;
    const userId = req.user.id

    try {
        const query = {
            where: {
                id: mycourseId,
                userId: userId,
            }
        };

        await models.myCoursesModel.destroy(query);
        res.status(200).json({message: "Course removed from your list."})
    } catch (err) {
        res.status(500).json({error:err})
    }
})

module.exports = router;