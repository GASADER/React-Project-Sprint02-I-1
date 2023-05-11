import { getUser } from "../service/user.service"

export const getall = async (req,res) => {
    const userinfo = await getUser()
    res.send(userinfo)
}