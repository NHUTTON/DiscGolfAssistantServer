const Express = require('express');
const { model } = require('../db');
const router = Express.Router();
let {validateJWT} = require("../middleware");
const {models} =require('../models')
   
router.post('/create', validateJWT, async (req,res) => {
    const {image, name, city, state, holes, distance, tee} = req.body.course
    try{
        if (req.user.admin === true) {
            await models.CourseModel.create({
                image: image,
                name: name, 
                city: city, 
                state: state, 
                holes: holes, 
                distance: distance, 
                tee: tee,
            })
            .then(course => {
                    res.status(201).json({
                        course: course,
                        message: 'Course added to database'
                    })
                })
        } else {
            res.status(403).json({
                message: "You are not an admin."
            })
        }
    } catch (err) {
        res.status(500).json({
            error: `Failed to create course: ${err}`
        })
    }
})

//GET ALL COURSES IN DB

router.get("/", async (req, res) => {
    try {
        const courses = await models.CourseModel.findAll({
            include: {
            model: models.myCoursesModel 
            }     
        });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({error:err})
    }
});

//GET COURSE BY NAME

router.get("/:name", async (req,res) => {
    const {name} = req.params;
    try {
        const results = await models.CourseModel.findAll({
            where: {name: name}
        });
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

// UPDATE A COURSE IN THE DATABASE

router.put("/update/:id", validateJWT, async (req, res) => {
    const {image, name, city, state, holes, distance, tee} = req.body.course;
    const courseId = req.params.id;
    const userId = req.user.id
    const query = {
        where: {
            id: courseId,
        }
    };
    const updatedCourse = {
            image: image,
            name: name, 
            city: city, 
            state: state, 
            holes: holes, 
            distance: distance, 
            tee: tee
    };
    try {
        if (req.user.admin === true)  {
            const update = await models.CourseModel.update(updatedCourse, query);
            res.status(200).json(update);
        } else {
            res.status(403).json({
                message: "You are not an admin!"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({error:err});
    }
})

router.delete("/delete/:id", validateJWT, async (req, res) => {
    const courseId = req.params.id;

    try {
        const query = {
            where: {
                id: courseId
            }
        };
        if (req.user.admin === true) {
            await models.CourseModel.destroy(query);
            res.status(200).json({message: "Course removed from the database."})
        } else {
            res.status(403).json({
                message: "You are not an admin"
            })
        }
    } catch (err) {
        res.status(500).json({error:err})
    }
})

module.exports = router;
