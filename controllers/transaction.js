const transactions = require('../services/transaction')


const createTransaction = async (req, res, next) => {
    const { pk_transaction, fk_user, description, amount} = req.body
    try {
        let transaction = transactions.createTransaction( pk_transaction, fk_user, description, amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
const getTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    try {
        let transaction = await transactions.getTransaction(pk_transaction)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const updateTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    const { fk_user, description, amount } = req.body
    try {
        let transaction = await transactions.updateTransaction(pk_transaction, fk_user, description, amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}
const getTransactionByUser = async (req, res, next) => {
    const { pk_user, page } = req.params
 
    try {
        let transaction = await transactions.getTransactionByUser(pk_user, page)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionByUser
}