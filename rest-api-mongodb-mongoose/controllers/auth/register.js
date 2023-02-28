const bcrypt = require("bcrypt")

const ModelAuthUser = require("../../models/authUser")
const { HttpError } = require("../../helpers")

const register = async (req, res) => {
    const { email, password } = req.body

    const user = await ModelAuthUser.findOne({ email })

    if (user) {
        throw HttpError(409, "Conflict: Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const userNew = await ModelAuthUser.create({...req.body, password: hashPassword})

    res.status(201).json({
        name: userNew.name,
        email: userNew.email,
    })
}

module.exports = register