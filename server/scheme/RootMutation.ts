import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { MovieType, DirectorType } from "./Types";
import { Director, Movie } from "../models";

const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        addDirector: {
            type: DirectorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: async (parent, { name, age }) => {
                return Director.create({ name, age });
            }
        },
        deleteDirector: {
            type: DirectorType,
            args: {
                _id: { type: GraphQLID },
            },
            resolve: async (parent, { _id }) => {
                return Director.findByIdAndRemove(_id);
            }
        },
        updateDirector: {
            type: DirectorType,
            args: {
                _id: { type: GraphQLID },
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: async (parent, { _id, name, age }) => {
                return Director.findByIdAndUpdate(_id, { name, age }, { new: true });
            }
        },
        addMovie: {
            type: MovieType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                directorId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async (parent, { name, genre, directorId }) => {
                return Movie.create({  name, genre, directorId });
            }
        },
        deleteMovie: {
            type: MovieType,
            args: {
                _id: { type: GraphQLID },
            },
            resolve: async (parent, { _id }) => {
                return Movie.findByIdAndRemove(_id);
            }
        },
        updateMovie: {
            type: MovieType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                directorId: { type: GraphQLID },
            },
            resolve: async (parent, { _id, name, genre, directorId }) => {
                return Director.findByIdAndUpdate(_id, { name, genre, directorId }, { new: true });
            }
        },
    }
});

export default RootMutation;