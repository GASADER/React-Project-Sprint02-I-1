import React, { useState } from 'react';
import Axios from 'axios';

export default function Upload() {
    Axios.defaults.withCredentials = true;
    const [imageFile, setImageFile] = useState('');

    const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImageFile(reader.result);
    }
}

const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!imageFile) return;
    Axios.put("http://127.0.0.1:3001/user", { data: imageFile});
}

return (
    <div>
        <form onSubmit={handleSubmitFile}>
            <input
                type="file"
                onChange={handleFileInputChange}
            />
            <button type="submit">
                submit
            </button>
            
         </form >
     </div >
  )
}