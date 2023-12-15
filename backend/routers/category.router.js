const express = require("express");
const router = express.Router();
const Category = require("../models/category");


router.post("/add", async(req,res) =>{
    try {
        const {name} = req.body;
        const category = new Category({
            _id: uuidv4(),
            name: name
        });

        await category.save();
        res.json({
            message:"Kategori eklendi"
        });
    } catch (error) {
        res.stats(500).json({
            message: error.message
        });
    }
})

router.post("/removeById", async(req,res) =>{
    try {
        const {_id} = req.body;
        
        await Category.findByIdAndDelete(_id);

        res.json({
            message:"Kategori silindi"
        });
    } catch (error) {
        res.stats(500).json({
            message: error.message
        });
    }
})

router.post("/update", async(req,res) =>{
    try {
        const {_id, name} = req.body;
        const category=await Category.findOne({_id:_id});
        category.name=name;

        await Category.findByIdAndUpdate(_id, category);

        res.json({
            message:"Kategori güncellendi"
        });
    } catch (error) {
        res.stats(500).json({
            message: error.message
        });
    }
})

router.get("/getAll", async(req,res) =>{
    try {
       const categories=await Category.find().sort({name:1});
        res.json({
            categories: categories
        })
        
    } catch (error) {
        res.stats(500).json({
            message: error.message
        });
    }
})

module.exports = router;