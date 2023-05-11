import { post } from "../models/mockdata.js";

function routers(app) {
  app.get("/", (req, res) => {
    res.send("GET")
  });
  app.get("/user", (req, res) => {
    res.send(post);
  });
}
export default routers;

// webServer.get("/", (request, response) => {
//     console.log("GET")
//     response.send(post);
//   });
