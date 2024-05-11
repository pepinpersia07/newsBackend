const express = require('express');
const router = express.Router();
const Model = require('../model')

router.post('/saveNews',async(req,res)=>{
    const data = new Model({
        author:req.body.author,
        title:req.body.title,
        description:req.body.description,
        url:req.body.url,
        urlToImage:req.body.urlToImage,
        publishedAt:req.body.publishedAt,
        content:req.body.content,
    });
    try{
        await data.save();
        res.status(200).json({message: 'News Saved Successfully'});
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.get('/getSavedNews', async (req,res)=>{
      try{
        const data = await Model.find();
        res.status(200).json({data});

      }catch(error){
        res.status(500).json({message: error.message})
      }
});

router.put('/updateSavedNews/:id',async(req,res)=>{
    try{
        const result = await Model.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(201).json({message: 'Updated'});

    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.delete('/deleteSavedNews/:id', async(req,res)=>{
    try{
        const result = await Model.findByIdAndDelete(req.params.id);
        res.status(201).json({message:'Unsaved News'});

    }catch(error){
        res.status(400).json({message: error.message});
    }
})


module.exports = router;