const { postgresql } = require('../databases/postgresql')

/**
 * Create a user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: 1, name: "Juan", status:true}}
 */
const createUser = (pk_user, name, status) => {
    try {
        const user = postgresql.public.none(`insert into users (pk_user, name, status) values ('${pk_user}','${name}','${status}');`);
        return user;
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Update a user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: 1, name: "Juan", status:true}}
 */
const updateUser = (pk_user, name, status) => {
    try {
        const user = postgresql.public.none(`update users set name='${name}', status='${status}' where pk_user= '${pk_user}'; `);
        return user;

    } catch (e) {
        throw new Error(e);
    }
}
/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {
    let user = postgresql.public.one(`select pk_user, name, status from users where pk_user = '${pk_user}' and status=true`);
    return user
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {
    try {
        const user = postgresql.public.none(`update users set status=false where pk_user= '${pk_user}'; `);
        return user;

    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser
}