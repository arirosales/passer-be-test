const express = require('express')

const { users, transaction } = require('../controllers')

const router = express.Router()


router.get('/users/:pk_user', users.getUser)
   
    .post('/transaction/', transaction.createTransaction)
    .put('/users/update/:pk_user', users.updateUser)
    .delete('/users/delete/:pk_user', users.deleteUser)
  

module.exports = router