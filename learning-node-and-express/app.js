import express from 'express';
import morgan from 'morgan';
import StudentRoutes from './routes/StudentRoutes'
import _ from 'lodash'

const PORT = 3000;

const server = express();


const STUDENT_BASE_URL = buildURL("v1", "students");

server.use(STUDENT_BASE_URL, StudentRoutes);

server.get('/router-handlers', (req, res, next) => {
});


server.listen(3000, () => {
console.log(`Server started on port: ${PORT}`);
})