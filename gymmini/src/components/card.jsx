import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
  faRoad,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Popover from "./popover-card";

import MockdataContext from "@/context/cardContext";



export default function Card() {
  const mock = useContext(MockdataContext);
  return (
    <>
      {mock.map((item) => (
        <div
          className="card border-2 border-solid border-black h-auto rounded-3xl w-full mb-4 text-white inline-block px-4"  
          key={item.id}
        >
          <div className="cardHeader w-auto h-auto flex justify-between rounded-t-3xl px-2 py-2 ">
            <div className="profilename flex items-center">
              <div className="card-profile-img-container w-8 h-auto items-center  flex ">
                <img
                  src={item.profileImg}
                  alt=""
                  className="card-profile-img aspect-square rounded-full"
                />
              </div>
              <p className="profile-name font-bold px-2">{item.profileName}</p>
            </div>
            <Popover/>
          </div>
          <div className="cardSection  w-full h-auto relative">
            {item.sectionImg ? (
              <div className="card-section-img ">
                <img
                  src={item.sectionImg}
                  alt=""
                  className="aspect-auto "
                />
                <div className="card-section-info flex flex-col justify-end h-auto absolute bottom-0 items-center text-white p-2 ">
                  <div className="card-section-distance ">
                    <FontAwesomeIcon icon={faRoad} className="px-2" />
                    {item.distance} km
                  </div>
                  <div className="card-section-duration ">
                    <FontAwesomeIcon icon={faClock} className="px-2" />
                    {item.duration} hr
                  </div>
                  <button className="card-section-tag px-2 rounded-3xl border border-black text-white bg-purple-500">{item.tag}</button>
                </div>
              </div>
            ) : (
                <div className="card-section-info flex flex-col justify-center items-center bottom-0 w-full h-32 p-2 bg-black">
                  <div className="card-section-distance ">
                    <FontAwesomeIcon icon={faRoad} className="px-2" />
                    {item.distance} km
                  </div>
                  <div className="card-section-duration ">
                    <FontAwesomeIcon icon={faClock} className="px-2" />
                    {item.duration} hr
                  </div>
                  <button className="card-section-tag px-2 rounded-3xl border border-black text-white bg-purple-500">{item.tag}</button>
                </div>
            )}
          </div>
          <div className="cardContext w-full h-auto p-2 text-white">
            <div className="cardContext-container flex flex-col">
              <div className="title-date flex justify-between">
                <div className="title text-xl font-bold">{item.title}</div>
                <div className="date">{item.date}</div>
              </div>
              <div className="discaptions">{item.discaptions}</div>
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
                  <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff" }} />
                </div>
              </button>
              </div>
              <button>
              <div className="card-setting">
              <FontAwesomeIcon icon={faShare} style={{ color: "#ffffff" }}  />
              </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
