const { postgresql } = require('../databases/postgresql')

/**
 * Create a Transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}}
 */
const createTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        const user = postgresql.public.none(` insert into transaction values ('${pk_transaction}','${fk_user}', '${description}', '${amount}')`);
        return {pk_transaction, fk_user, description, amount};
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Get an specific Transaction
 * @param {number} pk_transaction Transaction id primary key
 *  @returns {{1, 123, 'sinpe', 25.5}}
 */
const getTransaction = (pk_transaction) => {
    let transaction = postgresql.public.one(`select pk_transaction, fk_user, description, amount from transaction where pk_transaction = '${pk_transaction}'`);
    return transaction
}

/**
 * Get an Transaction by user
 * @param {number} fk_user Transaction id foreign key
 *  @returns {{1, 123, 'sinpe', 25.5},{1, 123, 'deposito', 16.9}, {1, 123, 'efectivo', 100.34}}
 */
const getTransactionByUser = (fk_user) => {
    let transaction = postgresql.public.many(`select pk_transaction, fk_user, description, amount from transaction where fk_user = '${fk_user}'`);
    return transaction
}

/**
 * Update a Transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}}
 */
const updateTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        const user = postgresql.public.none(`update transaction set description='${description}', fk_user='${fk_user}', amount='${amount}' where pk_transaction= '${pk_transaction}'; `);
        return {pk_transaction, fk_user, description, amount};

    } catch (e) {
        throw new Error(e);
    }
}
module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionByUser
}