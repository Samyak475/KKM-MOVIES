const mongoose =require('mongoose');
mongoose.set('strictQuery',false)
mongoose.connect(process.env.mongo_url)

const connection =mongoose.connection;

connection.on('connected',()=>{
    console.log("Mongoose is connected")
});

connection.on('error',()=>{
    console.log("Mongoose error");
})

