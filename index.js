const express = require("express");
var cors = require('cors')
const app = express();
const listingdata=require("./routes/database_routes.js")
const signup= require("./routes/signup.js")
const login= require("./routes/login.js")



const { MongoClient } = require('mongodb');

//const player =  require("./schema");
app.use(express.json())
app.use(cors());

const corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions))

const url = 'mongodb+srv://devilrocks47:ripazha@cluster0.cckyakd.mongodb.net/rentbuddy';
const client = new MongoClient(url);

app.use("/databaseaction",listingdata)
app.use("/databaseaction",signup)
app.use("/databaseaction",login)


// app.post("/addlistings", async(req,res)=>{
    
//     try {
//      // const {name,goals} = req.body
//       await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db('rentbuddy');
//     const collection = db.collection('listings');
//       const savedata = await collection.insertMany([{ location: req.body.location, numberofrooms: req.body.numberofrooms,price: req.body.price }])
//       res.json({
//           success: true,
//           message: "data inserted",
//           data: savedata
//       })
//     } catch (error) {
//       console.error(error)
//       console.log("error")
//     }  
    
//   })

app.listen(3000,function(){
    console.log("serever is running")
})