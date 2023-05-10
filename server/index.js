import express from "express";
import cors from "cors";

const webServer = express();
webServer.use(cors());
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

const post = [
  {
    id:0,
    profileName:"Yasoo",
    profileImg:"https://source.unsplash.com/user/wsanter",
    // sectionImg:"https://source.unsplash.com/"
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
    id:1,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:2,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city",
    sectionImg:"https://source.unsplash.com/random/?city,night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:0,
    profileName:"Yasoo",
    profileImg:"https://source.unsplash.com/user/wsanter",
    // sectionImg:"https://source.unsplash.com/"
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:1,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:2,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city",
    sectionImg:"https://source.unsplash.com/random/?city,night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:0,
    profileName:"Yasoo",
    profileImg:"https://source.unsplash.com/user/wsanter",
    // sectionImg:"https://source.unsplash.com/"
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:1,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:2,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city",
    sectionImg:"https://source.unsplash.com/random/?city,night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:0,
    profileName:"Yasoo",
    profileImg:"https://source.unsplash.com/user/wsanter",
    // sectionImg:"https://source.unsplash.com/"
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:1,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:2,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city",
    sectionImg:"https://source.unsplash.com/random/?city,night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    sectionImg:"https://source.unsplash.com/random/?city",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
{
    id:3,
    role:"user",
    profileName:"Alie",
    profileImg:"https://source.unsplash.com/random/?city,night",
    distance:1,
    duration:2,
    tag:"Running",
    date:"07/12/22",
    title:"We Can Do It!",
    discaptions:"View this so good  @Kalifarrr"
},
];

webServer.post("/", (request, response) => {
    const name = request.body.name
    const age = request.body.age
    const postId = `companyId-${post.length + 1}`
    company.push({postId,name,age,taxId})
    response.send(post);
  });
webServer.get("/", (request, response) => {
    console.log("GET")
    response.send(post);
  });

webServer.listen(port,ipAddress,()=>{
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  })