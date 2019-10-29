import express from 'express';
import students from './data/students.json';

const PORT = 3000

const server = express()

const buildURL = (version, path) => {
    return `/api/${version}/${path}`
}

server.get(buildURL('v1', 'students'), (req, res) => {
    res.send(students)
})

server.listen(3000, () => {
console.log(`Server started on port: ${PORT}`);
})