import { Request, Response, NextFunction } from 'express';
import SolarBody from '../models/solarBody';
import mongoose from 'mongoose';

const createSolarBodies = (req: Request, res: Response, next: NextFunction) => {
    let { name, img, age, mass } = req.body;
    const solarBody = new SolarBody({
        _id: new mongoose.Types.ObjectId(),
        name,
        img,
        age,
        mass
    });

    return solarBody
        .save()
        .then((result) => {
            return res.status(201).json({
                solarBody: result
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: err.message,
                err
            });
        });
};

const getAllSolarBodies = (req: Request, res: Response, next: NextFunction) => {
    SolarBody.find()
        .exec()
        .then((results) => {
            return res.status(200).json({
                bodies: results,
                count: results.length
            });
        })
        .catch((err) => {
            return res.status(500).json({
                message: err.message,
                err
            });
        });
};

export default { createSolarBodies, getAllSolarBodies };
