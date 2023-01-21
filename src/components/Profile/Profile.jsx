import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../../features/auth/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  const post = user.user.postIds.map((post) => {
    return (
      <div key={post._id}>
        <p>{post.title}</p>
        <p>{post.description}</p>
      </div>
    );
  });

  return (
    <div>
      <p>Name: {user.user.name}</p>
      <p>Email: {user.user.email}</p>
      <p>Number of Posts: {user?.user.postIds.length}</p>
      {post}
    </div>
  );
};

export default Profile;