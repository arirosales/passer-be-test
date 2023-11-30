const express = require('express')

const { users } = require('../controllers')

const router = express.Router()


router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/update/:pk_user', users.updateUser)
    .delete('/users/delete/:pk_user', users.deleteUser)
  

module.exports = router