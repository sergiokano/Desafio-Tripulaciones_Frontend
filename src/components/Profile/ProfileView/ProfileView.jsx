import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../../../features/auth/authSlice";
import "./ProfileView.scss";

const ProfileView = () => {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const API_URL = "http://localhost:8080/";

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
              <img src={API_URL + post.image_path} alt="" />
            </div>
          )}
          <div>
            <h3>{post.incidence}</h3>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
      </div>
    );
  });

  return (
    <div>
      <p>{user.user.firstName}</p>
      <p>Email: {user.user.email}</p>
      <p>Incidencias reportadas: {user?.user.postIds.length}</p>
      {post}
    </div>
  );
};

export default ProfileView;
