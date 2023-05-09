import axios from "axios";
import { useState } from "react";

function Mockserver() {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const res = await axios.get("http://127.0.0.1:3001");
    console.log(res.data);
    setPost(res.data);
  };

  return (
    <>
      <button onClick={getPost}>Get Mock</button>
      {post.map((post) => {
        return (
          <div key={post.id}>
            <div>{post.role}</div>
            <div>{post.titel}</div>
            <img
              src={post.profileImg}
              alt=""
              className="card-profile-img aspect-square debug"
            />
          </div>
        );
      })}
      <div>test</div>
    </>
  );
}

export default Mockserver;
