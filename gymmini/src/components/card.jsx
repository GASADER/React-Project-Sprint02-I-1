import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { axiosInstance } from "../utils/axiosInstance.js";
import {
  faHeart,
  faClock,
  faRoad,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Popover from "./popover-card";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

export default function Card({ prop }) {
  const { enqueueSnackbar } = useSnackbar();
  console.log(prop);
  const id =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  const handleEdit = (item) => {
    console.log(item);
    try {
      router.push(
        {
          pathname: `/post/edit/`,
          query: { item: JSON.stringify(item) },
        },
        item
      );
    } catch (error) {
      console.error("Edit error:", error);
      const errorMessage = error.message;
      enqueueSnackbar(`Edit Post failed: ${errorMessage}`, {
        variant: "error",
      });
    }
  };

  const handleDelete = async (item) => {
    try {
      console.log("Delete");
      console.log(item);
      console.log(item._id);
      const response = await axiosInstance.delete(`/api/posts/${item._id}`);
      console.log(response);
      enqueueSnackbar("Delete Post success.", { variant: "success" });
      window.location.reload();
    } catch (error) {
      const errorMessage = error.message;
      console.error("Delete error:", error);
      enqueueSnackbar(`Delete Post failed: ${errorMessage}`, {
        variant: "error",
      });
    }
  };

  return (
    <div className="cardContainer lg:columns-3 md:columns-2 py-4 px-2">
      {prop.map((item, index) => {
        if (!item.post_status) {
          return null;
        }
        return (
          <div
            className="card border-2 border-solid border-black h-auto rounded-3xl w-full mb-4 text-white inline-block px-2 "
            key={index}
          >
            <div className="cardHeader w-auto h-auto flex justify-between rounded-t-3xl px-2 py-2 ">
              <div className="profilename flex items-center">
                <div className="card-profile-img-container w-8 h-auto items-center  flex ">
                  <img
                    src={item.userImage}
                    alt=""
                    className="card-profile-img aspect-square rounded-full"
                  />
                </div>
                <p className="profile-name font-bold px-2 text-ellipsis overflow-hidden">{item.username}</p>
              </div>
              {item.userId === id && token && (
                <Popover
                  prop={item}
                  onEdit={() => handleEdit(item)}
                  onDelete={() => handleDelete(item)}
                />
              )}
            </div>
            <div className="cardSection  w-full h-auto relative">
              {item.imageUrl ? (
                <div className="card-section-img ">
                  <img src={item.imageUrl} alt="" className="aspect-auto " />
                  <div className="card-section-info flex flex-col justify-end h-auto absolute bottom-0 items-start text-white p-2 ">
                    <div className="card-section-distance ">
                      <FontAwesomeIcon icon={faRoad} className="px-2" />
                      {item.distance} m.
                    </div>
                    <div className="flex gap-2">
                      <div className="card-section-duration ">
                        <FontAwesomeIcon icon={faClock} className="px-2" />
                        {item.duration.hr} hr
                      </div>
                      <div className="card-section-duration ">
                        {item.duration.min} min
                      </div>
                    </div>
                    <button className="card-section-tag px-2 rounded-3xl border border-black text-white bg-purple-500">
                      {item.type}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card-section-info flex flex-col justify-center items-center bottom-0 w-full h-32 p-2 bg-black">
                  <div className="card-section-distance ">
                    <FontAwesomeIcon icon={faRoad} className="px-2" />
                    {item.distance} km
                  </div>
                  <div className="flex gap-2">
                    <div className="card-section-duration ">
                      <FontAwesomeIcon icon={faClock} className="px-2" />
                      {item.duration.hr} hr
                    </div>
                    <div className="card-section-duration ">
                      {item.duration.min} min
                    </div>
                  </div>
                  <button className="card-section-tag px-2 rounded-3xl border border-black text-white bg-purple-500">
                    {item.type}
                  </button>
                </div>
              )}
            </div>
            <div className="cardContext w-full h-auto p-2 text-white">
              <div className="cardContext-container flex flex-col">
                <div className="title-date flex justify-between">
                  <div className="title text-xl font-bold">{item.title}</div>
                  <div className="date">{item.date}</div>
                </div>
                <div className="discaptions">{item.description}</div>
              </div>
            </div>
            <div className="cardFooter w-full h-auto p-2 ">
              <div className="cardFooter-container flex justify-between p-2">
                <div className="like-comment flex gap-4 ">
                  <button>
                    <div className="card-like">
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                  </button>
                  <button>
                    <div className="card-comment">
                      <FontAwesomeIcon
                        icon={faComment}
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                  </button>
                </div>
                <button>
                  <div className="card-setting">
                    <FontAwesomeIcon
                      icon={faShare}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
