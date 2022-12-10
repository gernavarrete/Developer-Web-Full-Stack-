const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();
const { createCharacter, getCharacters, getCharacter } = require('../controllers/character-controllers.js');

router.post('/character', createCharacter);
router.get('/character', getCharacters);
router.get('/character/:code', getCharacter)

module.exports = router;