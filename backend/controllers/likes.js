const { pool } = require("../models/db");

const createNewLike = (req, res) => {
  const post_id = req.params.id;
  const user_id = req.token.user_id;
  const likes_count = 1;

  const checkQuery = `SELECT * FROM Likes WHERE user_id = '${user_id}' AND post_id = '${post_id}';`;
  const checkData = [user_id, post_id];

  pool.query(checkQuery)
    .then((checkResult) => {
      if (checkResult.rows.length > 0) {
        // Like already exists, delete the like
        const deleteQuery = `DELETE FROM Likes WHERE user_id = '${user_id}' AND post_id = '${post_id}';`;
        return pool.query(deleteQuery);
      } else {
        // Like doesn't exist, insert a new like
        const insertQuery = `INSERT INTO Likes (user_id, post_id, likes_count) VALUES ($1, $2, $3) RETURNING *;`;
        const insertData = [user_id, post_id, likes_count];
        return pool.query(insertQuery, insertData);
      }
    })
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Like performed successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};


const counterOfLikes = (req,res)=>{
  
}

module.exports = {
  createNewLike,
  counterOfLikes
};
