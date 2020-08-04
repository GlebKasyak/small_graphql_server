import { Schema, model, Model } from "mongoose";

import { IDirector } from "../interfaces/DirectorInterfaces";

const directorSchema = new Schema({
    name: String,
    age: Number,
});

export default model<IDirector, Model<IDirector>>("Director", directorSchema);