const express = require('express');

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Rajputana Blog ki list");
});

router.post("/",(req,res)=>{
    res.send("done");
});

router.get("/:id",(req,res)=>{
    res.send("ye lo Rajputana Blog jiski id tumne di!");
});

module.exports = router;