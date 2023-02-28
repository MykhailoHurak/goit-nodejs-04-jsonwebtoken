const ModelAuthUser = require("../../models/authUser")
const { HttpError } = require("../../helpers")

const register = async (req, res) => {
    const { email } = req.body

    const user = await ModelAuthUser.findOne({ email })

    if (user) {
        throw HttpError(409, "Conflict: Email in use")
    }

    const userNew = await ModelAuthUser.create(req.body)

    res.status(201).json({
        name: userNew.name,
        email: userNew.email,
    })
}

module.exports = register