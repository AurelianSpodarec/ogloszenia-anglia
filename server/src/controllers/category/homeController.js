const express = require('express')
const router = express.Router();
const { homeService } = require('./../../services')

router.get('/api/v1/homes', async (req, res) => {
    const homes = homeService.listHomes()
    res.json(homes)
})

module.exports = router;