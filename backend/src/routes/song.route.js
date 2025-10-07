const express = require('express')
const router = express.Router()
const multer = require('multer')

const upload = multer({storage:multer.memoryStorage()})

router.post('/songs',upload.single('audio'),(req,res)=>{
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