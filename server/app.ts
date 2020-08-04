import express, { json } from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import CONFIG from "./config";
import connectToDB from "./db";
import schema from "./scheme"

const app = express();
app.use(json());
app.use(cors());

connectToDB();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(CONFIG.PORT, () => {
    console.log(`Server started on port ${ CONFIG.PORT }`)
});