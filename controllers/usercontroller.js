const Express = require('express');
const router = Express.Router();
const {models} =require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UniqueConstraintError } = require('sequelize/lib/errors');
const { validateJWT } = require('../middleware');

router.post('/register', async (req,res) => {
    const{firstname, lastname, username, password, supervisorrole} = req.body.user;
    try {
        await models.UserModel.create({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: bcrypt.hashSync(password, 13),
        supervisorrole: supervisorrole
    })
     .then (user => {
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
        res.status(201).json({
            user: user,
            message: 'Account created, welcome!',
            sessionToken: `Bearer ${token}`
        })
    }
)
} catch (err) {
if (err instanceof UniqueConstraintError) {
    res.status(409).json({
        message: "Username already exists"
    })
} else {
    res.status(500).json({
        error: `Failed to register user: ${err}`
    })
}
}
})

router.post("/login", async (req,res) => {

const { username, password} = req.body.user

try {
await models.UserModel.findOne({
    where: {
        username: username
    }
})
.then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, matches) => {
                if (matches) {
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                    res.json({
                        user: user,
                        message: 'Successfully logged in, welcome back!',
                        sessionToken: `Bearer ${token}`
                    })
                } else {
                    res.status(502).send({
                        error: 'bad gateway'
                    })
                }
            })
        } else {
            res.status(500).send({
                error:"failed to authenticate" 
            })
        }
    }
)
} catch (err) {
res.status(501).send({
    error: 'server does not support this functionality'
})
}
})

router.get('/userinfo', validateJWT, async (req,res) => {
try{
if (req.user.supervisorrole === true) {
    await models.UserModel.findAll({
        include: [{
            model: models.myCoursesModel,
        }]
    })
.then(
    users => {
        res.status(200).json({
            users: users
        }) 
    }
)}  else {
    res.status(403).json({
        message: "You are not an admin."
    })
}
} catch (err){
res.status(500).json({
    error: `Failed to retrieve users: ${err}`
        })
    }
})

router.delete("/delete/:id", validateJWT, async(req, res) => {
    try{
        if (req.user.supervisorrole === true) {
            await models.UserModel.destroy({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: models.myCoursesModel,
                }]
            })
        .then(
            users => {
                res.status(200).json({
                    message: "User removed from the database.",
                    users: users
                }) 
            }
        )}  else {
            res.status(403).json({
                message: "You are not an admin."
            })
        }
        } catch (err){
        res.status(500).json({
            error: `Failed to retrieve users: ${err}`
                })
            }
        })





module.exports = router;