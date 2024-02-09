const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./models/db")
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


const userRouter = require("./routes/user")
const roleRouter = require("./routes/roles")

const PostRouter =require("./routes/post")


const commentsRouter = require("./routes/comments");
const likesRouter = require("./routes/likes")


app.use("/users", userRouter);
app.use("/roles", roleRouter);
app.use("/post",PostRouter)
app.use("/comments", commentsRouter);
app.use("/likes", likesRouter)






app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
