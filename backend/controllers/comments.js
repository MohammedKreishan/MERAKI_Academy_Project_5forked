const {pool} = require("../models/db");

const createNewComment = (req, res) => {
  const post_id = req.params.id;
  const user_id = req.token.user_id;
  const { content } = req.body;
//   const currentDate = new Date();
//   const created_at = currentDate.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' +0000';
  const query = `INSERT INTO comments (user_id,post_id,content) VALUES ($1,$2,$3) RETURNING *`;
  const data = [user_id,post_id,content];

  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Comment created successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
        console.log(err);
      res.status(404).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};

const getCommentsByPostId = (req, res) => {
  const post_id = req.params.id;
  const query = `SELECT * FROM Comments WHERE post_id = '${post_id}'`
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All comments for post: ${post_id}`,
        result: result.rows,
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


const updateCommentsById = (req, res) => {
  const comment_id = req.params.id;
  const user_id = req.token.user_id;
  let {comment} = req.body;
  const query = `UPDATE Comments SET content = '${comment}' WHERE comment_id='${comment_id}' AND user_id = '${user_id}' RETURNING *;`;
  pool
    .query(query)
    .then((result) => {
      if (result.rows.length !== 0) {
        
        res.status(200).json({
          success: true,
          message: `Comment with id: ${comment_id} updated successfully `,
          result: result.rows[0],
        });
      } 
        else {
          throw new Error("Error happened while updating Comment");

        }
      
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

const deleteCommentsById = (req, res) => {
  const comment_id = req.params.id;
  const query = `UPDATE Comments SET 	is_deleted= 1 WHERE comment_id='${comment_id} RETURNING *'`;
  console.log(comment_id);

  pool
    .query(query)
    .then((result) => {
      if (result.rowCount !== 0) {
        res.status(200).json({
          success: true,
          message: `Comment with id: ${comment_id} deleted successfully`,
        });
      } else {
        throw new Error("Error happened while deleting Comment");
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};

module.exports = {
  createNewComment,
  getCommentsByPostId,
  updateCommentsById,
  deleteCommentsById
};


