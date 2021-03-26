let animals = require('../data/animals.json')
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(animals)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const animal = animals.find((a) => a.id === id)
        resolve(animal)
    })
}

function create(animal) {
    return new Promise((resolve, reject) => {
        const newAnimal = {id: uuidv4(), ...animal}
        animals.push(newAnimal)
        writeDataToFile('./src/backend/data/animals.json', animals)
        resolve(newAnimal)
    })
}

function update(id, animal) {
    return new Promise((resolve, reject) => {
        const index = animals.findIndex((a) => a.id === id)
        animals[index] = {id, ...animal}

        writeDataToFile('./src/backend/data/animals.json', animals)
        resolve(animals[index])
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        animals = animals.filter((a) => a.id !== id)
        writeDataToFile('./src/backend/data/animals.json', animals)
        resolve()
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}