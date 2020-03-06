import session from "express-session";
import { makeSessionStore } from "../data-storage";
export default function makeSessionSetup() {
  return async function sessionSetup(server) {
    server.use(
      session({
        cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
        secret: "signingtigers",
        resave: true,
        saveUninitialized: true,
        store: makeSessionStore()
      })
    );
  };
}
