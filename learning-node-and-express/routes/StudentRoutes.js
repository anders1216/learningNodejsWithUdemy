import express from 'express';
import students from '../data/students.json'

const router = express.Router();

router.get(`/`, (req, res) => {
    res.json(students)
})

router.get(`/:id`, (req, res) => {
    const student = _.find(students, student => student.id === req.params.id);
    console.log(student)
    if (student) {
        res.json(student);
    }else{
        res.send("Student Not Found :?")
    }
})

router.post(`/`, (req, res) => {
    console.log("handling POST req...")
    res.end()
})

router.put(`/`, (req, res) => {
    console.log("handling PUT req...")
    res.end()
})

router.delete(`/`, (req, res) => {
    console.log("handling DELETE req...")
    res.end()
})

module.exports = router