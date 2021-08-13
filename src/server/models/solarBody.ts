import mongoose, { Schema } from 'mongoose';
import { SolarBody } from '../interfaces/types';

const SolarBodySchema = new Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        age: { type: Number, required: true },
        mass: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model<SolarBody>('SolarBody', SolarBodySchema);
