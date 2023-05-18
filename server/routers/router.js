import UserRouter from "./post.router.js"

function routers(app) {
  app.get("/", (req, res) => {
    res.send("GET")
  });
  app.use("/users", UserRouter)
}
export default routers;

