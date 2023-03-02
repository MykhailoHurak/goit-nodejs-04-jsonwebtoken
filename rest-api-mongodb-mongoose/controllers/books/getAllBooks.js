const BookModel = require("../../models/book")

const getAllBooks = async (req, res) => { 
        const { _id: owner } = req.user
        const result = await BookModel.find({owner})
        res.json(result)
}

module.exports = getAllBooks