import { Document } from "mongoose";

export interface IDirector extends Document {
    name: string,
    age: number
};