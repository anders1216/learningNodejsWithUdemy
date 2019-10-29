import express from 'express';
import students from './data/students.json';
import _ from 'lodash'

const PORT = 3000

const server = express()

const buildURL = (version, path) => {
    return `/api/${version}/${path}`
}

const STUDENT_BASE_URL = buildURL("v1", "students")

server.get(`${STUDENT_BASE_URL}`, (req, res) => {
    res.send(students)
})

server.get(`${STUDENT_BASE_URL}/:id`, (req, res) => {
    const student = _.find(students, student => student.id === req.params.id);
    console.log(student)
    if (student) {
        res.json(student);
    }else{
        res.send("Student Not Found :?")
    }
})

server.post(`${STUDENT_BASE_URL}`, (req, res) => {
    console.log("handling POST req...")
    res.end()
})

server.put(`${STUDENT_BASE_URL}`, (req, res) => {
    console.log("handling PUT req...")
    res.end()
})

server.delete(`${STUDENT_BASE_URL}`, (req, res) => {
    console.log("handling DELETE req...")
    res.end()
})



server.listen(3000, () => {
console.log(`Server started on port: ${PORT}`);
})