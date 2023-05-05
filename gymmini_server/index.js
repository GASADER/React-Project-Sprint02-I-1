import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const post = [];

webServer.post("/company", (request, response) => {
    const name = request.body.name
    const age = request.body.age
    const postId = `companyId-${post.length + 1}`
    company.push({postId,name,age,taxId})
    response.send(post);
  });

webServer.listen(port,ipAddress,()=>{
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  })