import { Document } from 'mongoose';

export interface SolarBody extends Document {
    name: string;
    img: string;
    age: number;
    mass: string;
}
