const router = require('express').Router()

router.get('/pets')
router.get('/pet/:id')
router.post('/pet/create')
router.put('/pet/update/:id')
router.delete('/pet/delete/:id')

module.exports = router