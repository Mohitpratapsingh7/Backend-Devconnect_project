const express = require('express');
const postControllers = require("../controllers/postControllers");

const router = express.Router();

// const getPostsList = (req, res) => {
//     res.send("Ye le blogs li list");
// };

// const addPostinDB = (req, res) => {
//     res.send("done");
// };


// const getPostByID = (req, res) => {
//     res.send("ye lo blog jiski id tumne di!");
// };

router.get("/",postControllers.getPostsList);
router.post("/", postControllers.addPostinDB); 
router.get("/:id", postControllers.getPostByID);

// router.get("/", (req, res) => {
//     res.send("Ye le blogs li list");
// });

// router.post("/", (req, res) => {
//     res.send("done");
// });

// router.get("/:id", (req, res) => {
//     res.send("ye lo blog jiski id tumne di!");
// });

module.exports = router;    