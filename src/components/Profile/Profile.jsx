import React, { useState } from "react";
import ProfileView from "./ProfileView/ProfileView";
import ProfileActivity from "./ProfileActivity/ProfileActivity";


const Profile = () => {
  const [isView, setIsView] = useState(true);
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="flex flex-col items-center w-full">
        <div className="w-5/6 flex bg-[#D9D9D9] rounded-[12px] leading-7 text-[17px] my-7">
          <span
            className={`flex-1 py-2 text-center font-semibold rounded-[12px] ${
              isView ? "bg-orange-1 text-white" : "bg-[#D9D9D9] text-black"
            }`}
            onClick={() => setIsView(true)}
          >
            Mi actividad
          </span>
          <span
            className={`flex-1 py-2 text-center font-semibold rounded-[12px] ${
              !isView ? "bg-orange-1 text-white" : "bg-[#D9D9D9] text-black"
            }`}
            onClick={() => setIsView(false)}
          >
            Mi barrio
          </span>
        </div>

        <div className="flex-1 w-full flex flex-col">
          {isView ? <ProfileView /> : <ProfileActivity />}
           
        </div>
      </div>
    </div>
  );
};

export default Profile;
