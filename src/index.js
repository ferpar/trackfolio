import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { notFound, signupCont, loginCont } from "./controllers";
import makeCallback from "./express-callback";
import { authSetup } from "./auth-provider";
import { connectToDb } from "./data-storage";

dotenv.config();

const server = express();

connectToDb();

server.use(bodyParser.json());

authSetup(server);

const apiRoot = process.env.APIROOT;

server.post(`${apiRoot}/signup`, makeCallback(signupCont));
server.post(`${apiRoot}/login`, makeCallback(loginCont));
server.use(makeCallback(notFound));

server.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT);
});
