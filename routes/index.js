const express = require('express')

const { users, transaction } = require('../controllers')

const router = express.Router()


router.get('/users/:pk_user', users.getUser)
    .get('/transaction/:pk_transaction', transaction.getTransaction)
    .get('/transaction/byUser/:pk_user', transaction.getTransactionByUser)
    .post('/users/', users.createUser)
    .post('/transaction/', transaction.createTransaction)
    .put('/users/update/:pk_user', users.updateUser)
    .put('/transaction/:pk_transaction', transaction.updateTransaction)
    .delete('/users/delete/:pk_user', users.deleteUser)
  


    
module.exports = router