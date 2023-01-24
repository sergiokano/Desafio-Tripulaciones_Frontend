import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../../../features/auth/authSlice";
import "./ProfileView.scss";
import Vector from "../../../assets/Vector.svg";
import Location from "../../../assets/location.svg";
import Profile from "../../../assets/profile.svg";

const ProfileView = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    dispatch(getInfo());
  }, [posts]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const post = user.user.postIds.map((post) => {
    return (
      <div>
        <div key={post._id}>
          <div>
            {post.image_path && (
              <div>
                <img
                  className="incidence-pic"
                  src={API_URL + post.image_path}
                  alt=""
                />
              </div>
            )}
            <div>
              <div className="vector-container">
                <img src={Vector} alt="Logo" className="logo-img" />
                <h3 className="indidence-title">{post.incidence}</h3>
              </div>
              <div className="location-container">
                <img src={Location} alt="Logo" className="loc-img" />
                <p className="description-title">{post.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      
      <p className="incidence-title">{user.user.firstName}</p>

      {post}
    </div>
  );
};

export default ProfileView;
