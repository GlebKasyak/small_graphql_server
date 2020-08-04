import { connect, connection, connections } from "mongoose";

import CONFIG from "./config";

export default () => {
    connect(CONFIG.MONGO_DB, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    connection.on("error", err => console.log(`Connection error ${ err }`));
    connection.once("open", () => {
        const info = connections[0];
        console.log(`Connected to
         host: ${ info.host },
         port: ${ info.port },
         name: ${ info.name }
        `);
    })
}