const express = require('express');
const auth = require('../middleware/auth');
const Track = require('../models/Track');

const router = express.Router();

router.use(auth);

router.get('/tracks',async(req,res) =>{
    
    try {
        const tracks = await Track.find({userId:req.userId});
         res.send(tracks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({error:err.message});
        
    }
    
});

router.post('/tracks',async(req,res) =>{
    const {name,locations} = req.body;

    if(!name || !locations){
        res.status(422).send({error:'You must provide a name and locations'});
    }
try {
    const track = new Track({name,locations,userId: req.userId});
    await track.save();
    res.send(track);
} catch (err) {
    console.error(err.message);
    res.status(500).send({error:err.message});
}
   
})

module.exports = router;