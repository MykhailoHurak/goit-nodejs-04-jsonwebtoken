const jwt = require("jsonwebtoken")

require("dotenv").config()

const { SECRET_KEY } = process.env

const payload = {
    id: "63fdd05835630508b0d7bc62"
}

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" })
console.log("token: ", token)

const decodeToken = jwt.decode(token)
console.log("decodeToken: ", decodeToken)

try {
    const invalidToken =" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmRkMDU4MzU2MzA1MDhiMGQ3YmM2MiIsImlhdCI6MTY3NzU4MDU0NCwiZXhwIjoxNjc3NTg0MTQ0fQ.oWH1IfLD3fYBdHkMC1beYP712axK29J_NK98D9dLGe4"
    const payload = jwt.verify(token, SECRET_KEY)
    jwt.verify(invalidToken, SECRET_KEY)
} catch (error) {
    console.log(error.message)
}