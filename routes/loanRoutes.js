'use strict';

const express = require('express');
const userHandler = require('../controllers/authController');
const loanController = require('../controllers/loanController');

const router = express.Router();

router
    .route('/auth/register')
    .post(userHandler.register);

router
    .route('/auth/sign_in')
    .post(userHandler.sign_in);

    router
    .route('/')
    .get(loanController.getAllLoans)
    .post(loanController.createLoan);
  
router
    .route('/:id')
    .get(loanController.getLoan)
    .patch(loanController.updateLoan)
    .delete(loanController.deleteLoan);

module.exports = router;