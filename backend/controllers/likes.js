const { pool } = require("../models/db");

const createNewLike = (req, res) => {
  const post_id = req.params.id;
  const user_id = req.token.user_id;
  //   const currentDate = new Date();
  //   const created_at = currentDate.toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' +0000';
  const query = `INSERT INTO comments (user_id,post_id) VALUES ($1,$2) RETURNING *`;
  const data = [user_id, post_id];

  pool
    .query(query, data)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Like created successfully",
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


module.exports = {
  createNewLike,

};
