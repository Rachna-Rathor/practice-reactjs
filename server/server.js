const express=require("express")

require("dotenv").config();
const cors=require("cors");
const app=express();

// middleware
app.use(express.json());
// mongodb connection
const dbConnect=require("./config/database")
dbConnect();

// import routes
const itemRoutes=require("./routes/item")
// routes mouth 
app.use("/api/v1",itemRoutes);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app is listen at ${PORT}` )
})