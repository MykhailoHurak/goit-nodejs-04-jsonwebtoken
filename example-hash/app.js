const bcrypt = require("bcrypt")

const hashPassword = async (password) => {
    const result = await bcrypt.hash(password, 10) // 10 - це сіль для підвищення безпеки захешованого пароля
    console.log("hashPassword: ", result)

    const salt = await bcrypt.genSalt(10) // це сіль для підвищення безпеки хешування
    console.log("salt: ", salt)

    const result1 = await bcrypt.compare(password, result)
    console.log("Passwords match? - ", result1)

    const result2 = await bcrypt.compare("123457", result)
    console.log("Passwords match? - ", result2)
}

hashPassword("123456")