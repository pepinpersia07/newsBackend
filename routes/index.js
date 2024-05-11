const express = require('express');
const router = express.Router();

router.post('/save',(req,res)=>{
    res.send('News saved successfully');
})

module.exports = router;