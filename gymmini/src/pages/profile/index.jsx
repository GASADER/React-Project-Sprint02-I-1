import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import img from "../../../public/user.png";
import Card from "@/components/card";
import Image from "next/image";
import { axiosInstance } from "@/utils/axiosInstance";
import { useRouter } from "next/router";
import Loading from "../../components/loading.jsx"

export default function profile() {
  const [Id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [userImage, setUserimage] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const settingProfile = () => {
    router.push(`/profile/edit/`);
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    const fetchData = async () => {

        if (typeof window !== "undefined") {
          const token = localStorage.getItem("token");
          if (!token) {
            router.push("/"); 
            return;
          }
        }

      const userId = localStorage.getItem("userId");
      setId(userId);
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername);

      try {
        setIsLoading(true)
        const response = await axiosInstance.get(`/api/users/${userId}`);
        console.log(response.data);
        setResponseData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();

    const storedUserImage = localStorage.getItem("userImage");
    if (storedUserImage && storedUserImage !== "undefined") {
      setUserimage(storedUserImage);
    } else {
      setUserimage(img);
    }
  }, []);

  const item = {
    id: Id,
    username: username,
    userImage: userImage,
    firstName: responseData ? responseData.firstName : "",
  lastName: responseData ? responseData.lastName : "",
  birthDate: responseData ? formatDate(responseData.birthDate) : "",
  gender: responseData ? responseData.gender : "",
  height: responseData ? responseData.height : "",
  weight: responseData ? responseData.weight : ""
  };

  const data = responseData ? [responseData] : [];
  const card = data.flat()
  
  return (
    <>
    {isLoading ? (
          <Loading /> 
        ) : (
      <Layout>
        <div className="profileContainer ">
          <div className="profileHeadContainer text-white text-xl" key={item.id}>
            <div className="profileHead border rounded-lg flex m-8">
              <div className="profileimg grow flex flex-col items-center py-4">
                <div className="profileimgtitle flex-col mb-4"> {item.username}</div>
                <div className="profileimgcontainer w-36 h-36 rounded-full border border-yellow-500 m-4">
                  <Image
                    className="profile-img w-full rounded-full aspect-square "
                    src={userImage}
                  />
                </div>
              </div>
              <div className="profileinfo flex-col p-4 ">
              <div className="flex w-1/2">
                <div className="rank w-full text-yellow-400">Rank </div>
                <div className="rankinfo w-full">Beginner</div>
              </div>
                <div className="infodata grid grid-cols-4 grid-rows-2 auto-cols-max auto-rows-max py-2 items-center ">
                  <label htmlFor="firstName">FirstName</label>
                  <div className="firstName ">
                    {item.firstName}
                  </div>

                  <label htmlFor="lastName">LastName</label>
                  <div className="lastNameme ">
                    {item.lastName}
                  </div>

                  <label htmlFor="birthDate">BirthDate</label>
                  <div className="birthDate  ">{item.birthDate}</div>

                  <label htmlFor="gender">Gender</label>
                  <div className="gender  ">{item.gender}</div>

                  <label htmlFor="height">Height</label>
                  <div className="height ">{item.height}</div>

                  <label htmlFor="weight">Weight</label>
                  <div className="weight ">{item.weight}</div>
                </div>
              </div>
              <div className="profilesetting grow  flex items-start py-8">
                <button className="setting bg-red-500 rounded-2xl py-2 mx-4 w-full" onClick={settingProfile}>
                  {" "}
                  Setting
                </button>
              </div>
            </div>
            <div className="w-full border border-white mx-4"></div>
            <div className="yourPost px-8 py-4 text-2xl">YourPost</div>
            <Card prop={card} />
          </div>
        </div>
      </Layout>
        )}
    </>
  );
}
