import { connect, connection, ConnectionOptions } from "mongoose";
import config from "./config/config";

const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

connect(config.DB.URI, dbOptions);

connection.once("open", () => {
    console.log("MongoDB connection successfully");
});

connection.on("error", (error) => {
    console.log(error);
    process.exit(0);
});
