import React, { useState } from "react";
import Axios from "axios";
import { AdvancedImage, Placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function Upload() {
  Axios.defaults.withCredentials = true;
  const [imageFile, setImageFile] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
      setPreviewImage(reader.result); // Set the preview image
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!imageFile) return;
    Axios.put("http://127.0.0.1:3001/user", { data: imageFile }).then(() => {
        setPreviewImage("");
    });
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dtg5nqs9s",
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmitFile}>
        {previewImage && <img src={previewImage} alt="Preview" />}
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}