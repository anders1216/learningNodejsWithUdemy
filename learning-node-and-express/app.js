import express from 'express';

const PORT = 3000

const server = express();

server.listen(3000, () => {
console.log(`Server started on port: ${PORT}`);
});