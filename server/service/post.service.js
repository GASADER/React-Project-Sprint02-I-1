import cloudinary from "../service/cloudniary.js";
import Post from "../models/post.schema.js";

export async function PostActivity(data) {

    try {
        const fileStr = data.imageUrl;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
          folder: "profile_pic",
          format: "webp"
        });
        const postdata = new Post(data)
        postdata.imageUrl = uploadedResponse.url;
        postdata.post_status = true;
        postdata.timestamps = new Date();
        console.log(postdata);
        return postdata.save()
      } catch (error) {
        console.error(error);
      }
    // return newData.save();
  }