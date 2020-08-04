import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";

import { DirectorType, MovieType } from "./Types";
import { Director, Movie } from "../models";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        movie: {
            type: MovieType,
            args: { _id: { type: GraphQLID } },
            resolve: async (parent, { _id }) => {
                return await Movie.findById(_id);
            }
        },
        director: {
            type: DirectorType,
            args: { _id: { type: GraphQLID } },
            resolve: async (parent, { _id }) => {
                return await Director.findById(_id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: async () => await Movie.find()
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve: async () => await Director.find()
        },
    }
});

export default RootQuery;