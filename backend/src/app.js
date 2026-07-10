const express = require("express");
const loggerMiddleware = require('./middleware/logger.middleware')
const UserRouter = require("./routes/user.routes")
const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to project atlas"
    })
});
app.post("/user", (req, res) => {
    res.status(201).json({
        success: true,
        data: req.body
    });
});
module.exports = app;