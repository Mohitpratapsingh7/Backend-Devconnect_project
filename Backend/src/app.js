const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/postsRoutes");
const commentRouter = require("./routes/commentRoutes");
const app = express();


app.use(express.json());
//app.use(cors());

+


app.get("/", (req, res) => {
  res.send("Server is running ");
});

//app.use("/posts", postsRouter); 

//app.use("/comments", commentRouter);



module.exports = app;









