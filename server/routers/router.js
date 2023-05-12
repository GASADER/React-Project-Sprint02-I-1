import UserRouter from "./user.router.js"

function routers(app) {
  app.get("/", (req, res) => {
    res.send("GET")
  });
  app.use("/user", UserRouter)
}
export default routers;

