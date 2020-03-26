const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/singup',async(req,res) => {
    const {email,password} = req.body;
try {
    if(!email || !password) {
        return res.status(402).send({error: 'Must provide email and passwrod'})
    }
    let user = await User.findOne({email});
    if(user){
        return res.status(402).send({error:'User alredy exist'})
    }
     user = new User({email,password});
     const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(password,salt); 
    await user.save();

    const token = jwt.sign({id: user._id},config.get('jwt'),{expiresIn: 360000});
    res.send({token});
} catch (err) {
    res.status(422).send(err.message);
    console.error(err.message);
}
    

});

router.post('/singin', async (req,res) =>{
    const {email,password} = req.body;
    try {
        if(!email || ! password) {
            return res.status(402).send({error:'Must provide email and password'})
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(402).send({error: 'You  are not Registered'})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(402).send({error:"Your password is not Match"})
        }

        const token = jwt.sign({userId: user._id},config.get('jwt'),{expiresIn: 360000});
        res.send({token});

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
        
    }
})

module.exports = router;