const { findAllTutors, findTutorById, createTutor, updateTutor, deleteTutor } = require('../controllers/tutor.controller')

const router = require('express').Router()

router.get('/tutors', findAllTutors )
router.get('/tutor/:id', findTutorById)
router.post('/tutor/create', createTutor)
router.put('/tutor/update/:id', updateTutor)
router.delete('/tutor/delete/:id', deleteTutor)

module.exports = router