const express=require("express")
const router=express.Router();
const cors = require("cors")

const upload=require("../middlewares/item")

// export controllers
const getItem=require("../controllers/item");
const addItem=require("../controllers/item");
const updateItem=require("../controllers/item");
const deleteItem=require("../controllers/item");

router.get("/getItem",getItem.getItem);

router.post("/addItem", upload.array('images'),addItem.addItem);
router.put("/updateItem:id",updateItem.updateItem);
router.delete("/deleteItem:id",deleteItem.deleteItem);


module.exports=router;