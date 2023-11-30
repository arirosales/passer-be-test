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
 * get a especific user Transaction
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
    updateTransaction
}