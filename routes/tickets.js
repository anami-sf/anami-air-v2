const express = require('express')
const router = express.Router()
var ticketsCtl = require('../controllers/tickets')

router.get('/tickets/new', ticketsCtl.new)

module.exports = router

