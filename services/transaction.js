const transactionModel = require('../models/transaction')


/**
 * Create a Transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}}
 */
const createTransaction = async ( pk_transaction, fk_user, description, amount) => {
    try {
        return transactionModel.createTransaction( pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * get a especific Transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}}
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await transactionModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * get a especific  Transaction by user
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}}
 */
const getTransactionByUser = async (fk_user) => {
    try {
        return await transactionModel.getTransactionByUser(fk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}
/**
 * Update a Transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}}
 */
const updateTransaction = async ( pk_transaction,fk_user, description, amount) => {
    try {
        return transactionModel.updateTransaction( pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }

}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionByUser
}