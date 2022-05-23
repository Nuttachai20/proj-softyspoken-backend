const express = require("express")
const router = express.Router()

const userController = require("../Controller/userController")

router.get("/", (req, res) => {
    res.status(200).send("user")
})

router.post("/createUser", userController.createUser)

module.exports = router