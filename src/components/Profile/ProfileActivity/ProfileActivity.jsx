import React from "react";
import BadgeList from "../../../assets/badgelist.png";
import "./ProfileActivity.scss";

const ProfileActivity = () => {
  return (
    <div className="main-div">
       
      <span>
        <img className="badge" src={BadgeList} alt="" />
      </span>
    </div>
  );
};

export default ProfileActivity;
