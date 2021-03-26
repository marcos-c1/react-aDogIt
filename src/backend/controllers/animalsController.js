const Animal = require('../models/animalsModel');

const { getPostData } = require('../utils')
// @desc    Pega todos os produtos
// @route   GET /api/animals/
async function getAnimals(req, res) {
    try {
        const animals = await Animal.findAll()

        res.writeHeader(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(animals))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Pega um animal específico
// @route   GET /api/animals/:id
async function getAnimal(req, res, id) {
    try {
        const animal = await Animal.findById(id)

        if (!animal) {
            res.writeHeader(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Animal não encontrado" }))
        } else {
            res.writeHeader(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(animal))
        }

    } catch (error) {
        console.log(error)
    }
}

// @desc    Cria um animal
// @route   POST /api/animals/
async function createAnimal(req, res) {
    try {
        const body = await getPostData(req)

        const { name, race, price } = JSON.parse(body)

        const animal = {
            name,
            race,
            price
        }

        const newAnimal = await Animal.create(animal)
        res.writeHead(201, { 'Content-Type': 'application/json' })

        return res.end(JSON.stringify(newAnimal))

    } catch (error) {
        console.log(error)
    }
}

// @desc    Atualizar um animal
// @route   PUT /api/animals/:id
async function updateAnimal(req, res, id) {
    try {
        const animal = await Animal.findById(id)

        if (!animal) {
            res.writeHeader(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Animal não encontrado" }))
        } else {
            const body = await getPostData(req)

            const { name, race, price } = JSON.parse(body)

            const animalData = {
                name: name || animal.name,
                race: race || animal.race,
                price: price || animal.price
            }

            const updAnimal = await Animal.update(id, animalData)
            res.writeHead(200, { 'Content-Type': 'application/json' })

            return res.end(JSON.stringify(updAnimal))
        }


    } catch (error) {
        console.log(error)
    }
}

// @desc    Deleta um animal específico
// @route   DELETE /api/animals/:id
async function deleteAnimal(req, res, id) {
    try {
        const animal = await Animal.findById(id)

        if (!animal) {
            res.writeHeader(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Animal não encontrado" }))
        } else {
            await Animal.remove(id)
            res.writeHeader(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: `Animal ${id} removido` }))
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAnimals,
    getAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal
}