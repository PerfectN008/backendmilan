const router = require('express').Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const {registervalidate, loginvalidate} = require('../validation');
const bcrypt = require('bcryptjs')

//GET USER

router.get('/:id',(req,res)=>
{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/score/:id').post((req,res) => {
    User.findById(req.param.id)
    .then(points => {
        points.score = req.body.score;
        
        points.save()
        .then(() => res.json('user updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// REGISTER
router.post('/register', async (req,res)=>
{
    const {error} = registervalidate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);
    

    //check if the email already exists
    const emailExists = await User.findOne({email :req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');


    const user = new User({

        email:req.body.email,
        password:req.body.password,
        company:req.body.company,
        token :jwt.sign({token: req.body.password},process.env.SECRET),

    });
    try {
        const savedUser =await user.save();
        res.send(savedUser);
        
        
        
        

    }catch(err){
        res.status(400).send(err);
    }
});



// LOGIN
router.post('/login', async (req,res)=>
{
    const {error} = loginvalidate(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    const user = await User.findOne({email :req.body.email,password:req.body.password});
    if(!user) 
    {
    return res.status(400).send('invalid credentials');
    }
    else
    {
        
        /*//GETTING WEB-TOKENS
        const token = jwt.sign({_id: user._id}, process.env.SECRET);
        res.head('authtoken',token)*/

        res.json(user);
        
    }
    
})



module.exports = router;