const { pool } = require("../models/db");

const createNewPost = (req, res) => {
  const { content, media_url } = req.body;
  const user_id = req.token.user_id;
  const query = `
          INSERT INTO Posts (user_id, content, media_url)
          VALUES ($1, $2, $3)
          RETURNING *;
        `;
  const data = [user_id, content, media_url];

  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Post created successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};
const getpostByuserId = (req, res) => { 
  const {userId} = req.params; 
  const query = `
          SELECT * FROM 
          Posts
          JOIN Users ON Posts.user_id = Users.id 
          WHERE Posts.user_id=$1 AND Users.is_deleted=0;
        `;
  const data = [userId];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: `The user: ${userId} has no posts`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `All Posts for the user: ${userId}`,
          result: result.rows,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err.message,
      });
    });
};






 
module.exports = { createNewPost , getpostByuserId};
 

const getAllPosts = (req, res) => {
  const query = `
      SELECT * FROM Posts JOIN Users 
      ON posts.user_id = Users.id  
      WHERE posts.is_deleted = 0 AND Users.is_deleted = 0
     
  `;

  pool
      .query(query)
      .then((result) => {
          res.status(200).json({
              success: true,
              message: "All posts retrieved successfully",
              posts: result.rows,
          });
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json({
              success: false,
              message: "Server error",
              err: err.message,
          });
      });
};





const getPostById = (req, res) => {
  const post_id = req.params.postbyid;

  const query = `
      SELECT * FROM Posts
      WHERE id = $1 AND is_deleted = 0;
  `;

  const data = [post_id];

  pool
      .query(query, data)
      .then((result) => {
          if (result.rows.length > 0) {
              res.status(200).json({
                  success: true,
                  message: `Post with ID ${post_id} retrieved successfully`,
                  post: result.rows[0],
              });
          } else {
              res.status(404).json({
                  success: false,
                  message: `Post with ID ${post_id} not found`,
              });
          }
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json({
              success: false,
              message: "Server error",
              err: err.message,
          });
      });
}


module.exports = { createNewPost,getAllPosts,getPostById  };
=======
module.exports = { createNewPost,getAllPosts };
 


// CREATE TABLE Posts (
//     id SERIAL PRIMARY KEY,
//     user_id INT,
//     content TEXT NOT NULL,
//     media_url TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     is_deleted INT,
//     FOREIGN KEY (user_id) REFERENCES Users (id)
// );
