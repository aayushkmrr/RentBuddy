const express=require("express")
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://devilrocks47:ripazha@cluster0.cckyakd.mongodb.net/rentbuddy';
const client = new MongoClient(url);

const app=express.Router()

app.post("/signupnew", async(req,res)=>{
    
    try {
     // const {name,goals} = req.body
      await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('rentbuddy');
    const collection = db.collection('users');
      const savedata = await collection.insertMany([{ name: req.body.name,
                                                      contact: req.body.contact,
                                                      username: req.body.username,
                                                      password: req.body.password}])
      res.json({
          success: true,
          message: "data inserted",
          data: savedata
      })
    } catch (error) {
      console.error(error)
      console.log("error")
    }  
    
  })

module.exports=app
