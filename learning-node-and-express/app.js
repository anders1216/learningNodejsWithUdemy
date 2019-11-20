import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import StudentRoutes from './routes/StudentRoutes'
import _ from 'lodash'

const PORT = 3000;

const buildURL = (version, path) => {
    return `/api/${version}/${path}`
}

const server = express();

server.use(morgan('tiny'));
server.use(bodyParser.json());

const STUDENT_BASE_URL = buildURL("v1", "students");

server.use(STUDENT_BASE_URL, StudentRoutes);

server.get('/router-handlers', (req, res, next) => {
});


server.listen(3000, () => {
console.log(`Server started on port: ${PORT}`);
})