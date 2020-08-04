import { Schema, model, Model, Types } from "mongoose";

import { IMovie } from "../interfaces/MovieInterfaces";

const movieSchema = new Schema({
    name: String,
    genre: String,
    directorId: { type: Types.ObjectId, ref: "Director" }
});

export default model<IMovie, Model<IMovie>>("Movie", movieSchema);