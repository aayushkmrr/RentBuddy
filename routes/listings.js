const express=require("express")
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://devilrocks47:ripazha@cluster0.cckyakd.mongodb.net/rentbuddy';
const client = new MongoClient(url);

const app=express.Router()

app.get("/fetchlistings", async(req,res)=>{
    
    try {
     // const {name,goals} = req.body
      await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('rentbuddy');
    const collection = db.collection('listings');
    const listing = await collection.find().toArray(); res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(listing));
      
      
    } catch (error) {
      console.error(error)
      console.log("error")
    }  
    
  })

//  app.get with filter


//
module.exports=app
