import express from 'express';
import controller from '../controllers/solarBodies';

const router = express.Router();

router.post('/create', controller.createSolarBodies);
router.get('/get', controller.getAllSolarBodies);

export = router;
