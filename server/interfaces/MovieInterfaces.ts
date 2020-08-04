import { Document } from "mongoose";

export interface IMovie extends Document {
    name: string,
    genre: string,
    directorId: string
};