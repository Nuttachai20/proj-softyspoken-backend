
const userService = require("../Service/userService")
exports.createUser = async (req, res) => {
    let { email, name } = req.body
    try {
        await userService.CreateUser({ email, name })
    } catch (error) {
        res.status(400).send(error.message)
    }
}