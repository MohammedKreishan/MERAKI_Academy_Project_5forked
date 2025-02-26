const { pool } = require("../models/db");

const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");

// role_id => users => 1
const role_id = 1;
// is deleted = 0 => is soft delete => => is_deleted = 1
const is_deleted = 0;

const SEC = process.env.SEC;

const register = async (req, res) => {
  const {
    username,
    email,
    password_hash,
    profile_picture_url,
    bio = "bio",
  } = req.body;

  const salt = 5;
  const password = await bcryptjs.hash(password_hash, salt);
  const Email = email.toLowerCase();
  console.log(Email);
  console.log(password);

  let result = username.replace(/^\s+|\s+$/gm, "");
  const VALUES = [
    result,
    Email,
    password,
    profile_picture_url,
    bio,
    role_id,
    is_deleted,
  ]; // 7 elm

  const query = `INSERT INTO Users (
            username,
            email,
            password_hash,
            profile_picture_url,
            bio, 
            role_id,
            is_deleted) VALUES
        ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;

  pool
    .query(query, VALUES)
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Account created successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      if (err.code === "23505") {
        res.status(409).json({
          success: false,
          message: "The email or username already exists",
        });
        return;
      }
      console.log(err);
      res.status(500).json({
        message: err.message,
        err: err,
      });
    });
};
const login = (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT Users.id,Users.username,Users.email,Users.password_hash,Users.bio, Users.profile_picture_url,Users.is_deleted,Users.created_at,roles.id AS RoleId FROM Users
  JOIN Roles ON Users.role_id=Roles.id 
    WHERE Users.email=$1`;

  pool
    .query(query, [email])
    .then((result) => {
      const data = result?.rows[0];
      if (data?.is_deleted == 1) {
        res.status(404).json({
          massage: "You cannot access the site because you are blocked",
        });

        return;
      }
      bcryptjs.compare(password, data.password_hash, (err, isValid) => {
        if (isValid) {
          const payload = {
            user_id: data.id,
            name: data.username,
            image: data.profile_picture_url,
            role: data.roleid,
            is_deleted: data.is_deleted,
          };

          const options = { expiresIn: "360m" };

          const token = jwt.sign(payload, SEC, options);
          res.status(200).json({
            success: true,
            massage: "Valid login credentials",
            token: token,
            userId: data.id,
            image: data.profile_picture_url,
            name: data.username,
          });

          // UPDATE table_name
          // SET column1 = value1, column2 = value2, ...
          // WHERE condition;

          const query_is_loggedin = `UPDATE Users SET is_loggedin=${true} WHERE id=${
            data.id
          }`;

          pool
            .query(query_is_loggedin)
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.status(403).json({
            success: false,
            massage:
              "The email doesn’t exist or the password you’ve entered is incorrect",
          });
          return;
        }
      });
    })
    .catch((err) => {
      console.log("from login", err);
      res.status(403).json({
        success: false,
        massage:
          "The email doesn’t exist or the password you’ve entered is incorrect",
      });
    });
};

const deleteUser = (req, res) => {
  const { id } = req.body;
  const data = [id];
  const querySoftDelete = `UPDATE Users
  SET is_deleted = 1, profile_picture_url = 'https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_640.png'
  WHERE id = $1
  RETURNING *`;

  pool
    .query(querySoftDelete, data)
    .then((result) => {
      console.log(result.rows);
      res.status(203).json({
        message: "Successful Deleted",
        result: result.rows,
      });
      if (result.rows.length === 0) {
        res.status(404).json({
          massage: "not exist",
          result: result.rows,
        });
        return;
      }
    })
    .catch((err) => {
      res.status(500).json({
        massage: "SERVER ERROR",
        err: err,
      });
    });
};

const updateUser = (req, res) => {
  const user_id = req.token.user_id;
  const { username, profile_picture_url, bio } = req.body;
  const query = `UPDATE Users SET username=COALESCE($1,username),profile_picture_url=COALESCE($2,profile_picture_url) ,bio=COALESCE($3,bio) WHERE id=$4 RETURNING *;`;
  const VALUES = [username, profile_picture_url, bio, user_id];

  pool
    .query(query, VALUES)
    .then((result) => {
      res.status(200).json({
        message: "Updated successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      if (err.code === "23505") {
        res.status(200).json({
          message: "username exists",
          err: err,
        });
        return;
      }
      res.status(500).json({
        message: err.message,
        err: err,
      });
    });
};
const getAllUser = (req, res) => {
  // const id = req.token.user_id;
  // console.log("id",id);
  const query = `SELECT * FROM Users WHERE NOT id = 1 ;`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        message: "All Users",
        result: result.rows,
      });
    })
    .catch((err) => {
      console.log("from all", err);
      res.status(500).json({
        message: "Server error",
        err: err,
      });
    });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const data = [id];
  const query = `SELECT * FROM Users WHERE id = $1 ;`;
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        message: "User get Successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error",
        err: err,
      });
    });
};
const getAllUsersAdminDashboard = (req, res) => {
  pool
    .query(`SELECT * FROM Users;`)
    .then((result) => {
      res.status(200).json({
        message: "All Users",
        length: result.rows.length,
        result: result.rows,
      });
    })
    .catch((err) => {
      console.log("admin", err);
      res.status(500).json({
        message: "Server error",
        err: err.massage,
      });
    });
};

const reportUser = (req, res) => {
  const { id } = req.params;
  const { report } = req.body;
  const data = ["true", report, id];
  const query = `UPDATE Users set is_band = $1, the_reporte = $2 WHERE id = $3 RETURNING *; `;
  pool
    .query(query, data)
    .then((result) => {
      res.status(202).json({
        message: "Reported Successfully",
        result: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Server error",
        err: err,
      });
    });
};



const UnBanUser = (req, res) => {
  const { id } = req.body;
  const data = [id];
  const querySoftDelete = `UPDATE Users
  SET is_deleted = 0 
  WHERE id = $1
  RETURNING *`;

  pool
    .query(querySoftDelete, data)
    .then((result) => {
      console.log(result.rows);
      res.status(203).json({
        message: "Successful UnBan",
        result: result.rows,
      });
      if (result.rows.length === 0) {
        res.status(404).json({
          massage: "not exist",
          result: result.rows,
        });
        return;
      }
    })
    .catch((err) => {
      res.status(500).json({
        massage: "SERVER ERROR",
        err: err,
      });
    });
};



module.exports = {
  register,
  login,
  deleteUser,
  updateUser,
  getAllUser,
  getUserById,
  getAllUsersAdminDashboard,
  reportUser,
  UnBanUser
};
