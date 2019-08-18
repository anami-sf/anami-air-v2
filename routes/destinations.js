const express = require('express')
const router = express.Router()
const destinationsCtl = require(`../controllers/destinations`)

router.post(
    '/flights/:id/destinations', 
    destinationsCtl.create
    )

module.exports = router