const express = require("express")

const { register } = require("../../controllers/auth")
const { ctrlWrapper } = require("../../helpers")
const { validateBody } = require("../../middlewares")
const { schemaJoiRegister } = require("../../schemas")

const router = express.Router()

// SignUp - це і є Реєстрація (register)
router.post('/register', validateBody(schemaJoiRegister), ctrlWrapper(register))

module.exports = router
