import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Director, Movie } from "../models";

export const MovieType: GraphQLObjectType = new GraphQLObjectType({
    name: "Movie",
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        director: {
            type: DirectorType,
            resolve: async ({ directorId }) => {
                return await Director.findById(directorId);
            }
        }
    })
});

export const DirectorType: GraphQLObjectType = new GraphQLObjectType({
    name: "Director",
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: async ({ _id }) => {
                return await Movie.find({ directorId: _id });
            }
        }
    })
});