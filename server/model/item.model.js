const mongoose=require("mongoose")

const itemSchema=new mongoose.Schema(
    {
    company:{
        type:String
    },
    image:{
        type: Array,
        required: true
    },
    title:{
        type: String,
    },
    color:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
   
},{timestamps:true})

const item=mongoose.model("Item",itemSchema)

module.exports=item;