const express = require("express");
const userRouter = express.Router();
const {
  register,
  login,
  deleteUser,
  updateUser,
  getAllUser,
  getUserById,
  getAllUsersAdminDashboard,
  reportUser,
  UnBanUser
} = require("../controllers/user");

const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

userRouter.get("/admin", getAllUsersAdminDashboard);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.delete("/delete/:id/admin",  deleteUser);
userRouter.put("/update", authentication, updateUser);
userRouter.put("/update/report/:id",  reportUser);

userRouter.put("/update/unban/:id",  UnBanUser);

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);

module.exports = userRouter;

/*

TEST register => 

! api http://localhost:5000/users/register {ipa method : post}

!body =>
  {
    "username": "jamalbarhoom",
    "email": "jamalbarhoom@gmail.com",
    "password_hash": "123",
    "bio": "hi this is my bio",
    "profile_picture_url": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
}


! api http://localhost:5000/users/login {ipa method : post}

!body =>

  {
    "email":"jamalr@gmail.com",
    "password":"123"
}



! api http://localhost:5000/users/update {ipa method : put}

!body =>
{
    "username": "jamal",
    "profile_picture_url": "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
    "bio": "hi word "
}


! api http://localhost:5000/users/delete {ipa method : delete}

!body =>no body

*/
