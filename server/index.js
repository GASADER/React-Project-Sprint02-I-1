import express from "express";
import cors from "cors";
import 'dotenv/config.js'
import routers from "./routers/router.js";

const app = express();
app.use(cors());
app.use(express.json());

const ipAddress = process.env.API_IPADDRESS;
const port = process.env.API_PORT;



async function run(){

    routers(app)
    await app.listen(port,ipAddress,()=>{
        console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
        console.log(`Address: http://${ipAddress}:${port}`);
      })
}
run()



