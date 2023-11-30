const { postgresql } = require('../databases/postgresql')

/**
 * Create a Transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{1, 123, 'sinpe', 25.5}} new transaction
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
 * Get transactions by user with pagination
 * @param {number} fk_user  Transaction id foreign key
 * @param {number} page - Page number for pagination
 * @returns {{transactions: [{number, number, string, number}], metadata: {number, number}}}
 */
const getTransactionByUser = (fk_user, page) => {
    const limit= 5;
    const offset = (parseInt(page)-1)*limit
    const transactions = postgresql.public.many(`
    SELECT pk_transaction, fk_user, description, amount 
        FROM transaction 
        WHERE fk_user = '${fk_user}' 
        ORDER BY pk_transaction 
        LIMIT ${limit} OFFSET ${offset}
        `);
    const count = postgresql.public.one(`SELECT COUNT(*) FROM transaction where fk_user= '${fk_user}'`);
    return { transactions, metadata: { count,  page: parseInt(page) } };
}

/**
 * Update a transaction
 * @param {number} pk_transaction Transaction id
 *  * @param {number} fk_user Transaction id_user
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{1, 123, 'deposito', 25.5}} update transaction
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