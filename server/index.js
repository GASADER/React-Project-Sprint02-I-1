import express from "express";
import cors from "cors";
import 'dotenv/config.js'
import routers from "./routers/router.js";
import bodyParser from "body-parser";



const ipAddress = process.env.API_IPADDRESS;
const port = process.env.API_PORT;
const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
  };

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))




async function run(){

    routers(app)
    await app.listen(port,ipAddress,()=>{
        console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
        console.log(`Address: http://${ipAddress}:${port}`);
      })
}
run()



