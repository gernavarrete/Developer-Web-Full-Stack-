const { Op, Character, Role } = require('../db');

const createCharacter = async (req, res) => {  
    try {
        const {code, name, age, race, hp, mana } = req.body;
        const obj = {
            code, 
            name,
            age,
            race,
            hp,
            mana
        }
        if(!code || !name || !hp || !mana) throw new Error('Falta enviar datos obligatorios');
        const newCharacter = await Character.create(obj)
        res.status(201).json(newCharacter)
    } catch(err) {
        Object.entries(err).length === 0 ? 
        res.status(404).send(err.message) :
        res.status(404).send('Error en alguno de los datos provistos')
    }
}

const getCharacters = async (req,res) => {
    try {
        const {
            code,
            name,
            age,
            race,
            hp,
            mana
        } = req.query;
        let characters;
        if(race) characters = await Character.findAll({where: {
                race : race
            }})
        else characters = await Character.findAll();
        res.status(200).json(characters)
    } catch(err) {
        res.status(404).json(err)
    }
}

const getCharacter = async (req,res) => {
    try {
        const { code }  = req.params
        let characterCode = await Character.findOne({where: {
                code : code
            }})
        if(characterCode === null) throw new Error(`El código ${code} no corresponde a un personaje existente`)
        res.status(200).json(characterCode)
    } catch(err) {
        res.status(404).send(err.message)
    }
}

module.exports = {
    createCharacter,
    getCharacters,
    getCharacter
}