const express = require('express')
const router = express.Router()
const destinationsCtl = require(`../controllers/destinations`)

router.post(
    '/destinations/:id/destinations', 
    destinationsCtl.create
    )

module.exports = router