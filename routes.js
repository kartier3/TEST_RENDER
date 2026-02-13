'use strict';

import express, { response } from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import logger from "./utils/logger.js";
import { create } from "express-handlebars";

const app = express();
router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);

router.get('/error', (request, response) => response.status(404).end('Page not found.'));



router.get('/' ,about.createView);
router.get('/about', about.createView);
router.get('/error', (request, response) => response.status(404).end('Page not found.'));

const handlebars = create({extname: '.hbs'});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");





export default router;
