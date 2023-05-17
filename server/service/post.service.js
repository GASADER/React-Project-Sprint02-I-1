import cloudinary from "../service/cloudniary.js";

export async function PostActivity(data) {

    try {
        const fileStr = data.imageUrl;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
          folder: "profile_pic",
          width: "800"
        });
        data.imageUrl = uploadedResponse.url;
        console.log(data);
        return data
      } catch (error) {
        console.error(error);
      }
    // return newData.save();
  }