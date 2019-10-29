import express from 'express';

const PORT = 3000

const server = express();

server.get('/', (req, res) => {
    res.send("My first route using Express.js!")
})

server.listen(3000, () => {
console.log(`Server started on port: ${PORT}`);
});