const express = require('express')
const router = express.Router()
var ticketsCtl = require('../controllers/tickets')

router.get('/flights/:id/tickets/new', ticketsCtl.new)

router.post('/flights/:id/tickets/new', ticketsCtl.create)

module.exports = router

