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


module.exports = {
    createTransaction
}