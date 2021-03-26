const http = require('http');
const { getAnimals, getAnimal, createAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalsController')


const server = http.createServer((req, res) => {
    if (req.url === '/api/animals' && req.method === 'GET'){
        getAnimals(req, res)
    } else if (req.url.match(/\/api\/animals\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]
        getAnimal(req, res, id)
    } else if (req.url === '/api/animals' && req.method === 'POST'){
        createAnimal(req, res)
    } else if (req.url.match(/\/api\/animals\/([0-9]+)/) && req.method === 'PUT'){
        const id = req.url.split('/')[3]
        updateAnimal(req, res, id)
    } else if (req.url.match(/\/api\/animals\/([0-9]+)/) && req.method === 'DELETE'){
        const id = req.url.split('/')[3]
        deleteAnimal(req, res, id)
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: "Page not found" }));
    }
})
// /api/animals/:id


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
})