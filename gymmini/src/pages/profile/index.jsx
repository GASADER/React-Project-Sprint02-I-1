import React from "react";
import Layout from "@/components/layout";
import { mockdata } from "@/data/mockdata";
import Card from "@/components/card";

export default function login() {
  const item = mockdata.find((item) => item.id === 3);
  const card = mockdata.filter((item) => item.id === 3);

  return (
    <>
      <Layout>
        <div className="profileContainer">
          <div className="profileHeadContainer text-white" key={item.id}>
            <div className="profileHead flex p-8">
              <div className="profileimg grow debug flex flex-col items-center">
                <div className="profileimgtitle flex-col"> Profile Details</div>
                <div className="profileimgcontainer w-36 h-36 rounded-full border border-yellow-500">
                  <img
                    className="profile-img w-full rounded-full aspect-square "
                    src={item.profileImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="profileinfo debug flex-col">
                <div className="rank debug w-full">Rank {item.id}</div>
                <div className="infodata grid grid-cols-3 grid-rows-2 auto-cols-max auto-rows-max py-2">
                  <div className="firstName debug h-full">
                    {item.profileName}
                  </div>
                  <div className="lastNameme debug h-full">
                    {item.profileName}
                  </div>
                  <div className="birthDate debug h-full">{item.date}</div>
                  <div className="gender debug h-full">{item.profileName}</div>
                  <div className="height debug h-full">{item.profileName}</div>
                  <div className="weight debug h-full">{item.profileName}</div>
                </div>
              </div>
              <div className="profilesetting grow debug flex items-center align-middle">
                <button className="setting bg-red-500 rounded-2xl py-2 px-4 w-full"> Setting</button>
              </div>
            </div>
            <div className="w-full border border-white "></div>
            <div className="yourPost px-8 py-4">YourPost</div>
            <Card prop={card} />
          </div>
        </div>
      </Layout>
    </>
  );
}
