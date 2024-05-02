const item=require("../model/item.model")


/* GET request handler */
const getItem = async (req, res) => {
    try {
        const items = await item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST REQUEST

const addItem=async (req,res)=>{
    
    const newItem = new item({
        company: req.body.company,
        title: req.body.title,
        color: req.body.color,
        image: req.body.file,
        price: req.body.price,
        category:req.body.category,
        
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json({ message: "Item added successfully", item: savedItem });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

/* PUT Request handler */
const updateItem = (req, res) => {
    res.json({message: "update Item"})
}

/* DELETE Request handler */
const deleteItem = (req, res) => {
    res.json({message: "delete Item"})
}

module.exports = {
    getItem,
    addItem,
    updateItem,
    deleteItem
}