import express from 'express';
import ClassController from './controllers/classesController';
import ConnectionCotroller from './controllers/connectionsController';

const routes = express.Router();
const classesControllers = new ClassController();
const connectionsController = new ConnectionCotroller();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes; 