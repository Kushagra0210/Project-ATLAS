const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");
const { route } = require("../app");
router.get("/", getUsers);
router.get("/:id", getUserbyId);
router.post("/", createUser);
route.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;