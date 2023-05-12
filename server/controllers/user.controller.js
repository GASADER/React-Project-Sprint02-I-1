import { getUser } from "../service/user.service.js"

export const getall = async (req,res) => {
    const userinfo = await getUser()
    res.send(userinfo)
}