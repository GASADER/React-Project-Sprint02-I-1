import { getUser } from "../service/user.service.js"
import { PostActivity } from "../service/post.service.js"

export const getall = async (req,res) => {
    const userinfo = await getUser()
    res.json(userinfo)
}
export const post = async (req,res) => {
    const data = req.body
    try{
        const users = await PostActivity(data);
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({ error: "An error occurred while uploading the image" });
    }
}