const express = require('express')
const router = express.Router()

router.post('/songs',(req,res)=>{
  console.log(req.body);
  console.log(req.file);
  res.status(201).json({
    message:"song created successfullly"
  })
})

router.get('/songs',(req, res)=>{
  res.json({
    message:"songs"
  })
})

module.exports = router