import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createPost } from "../../features/posts/postsSlice";

const CreatePost = () => {
  const dispatch = useDispatch();

  function OnCreatePost(e) {
    e.preventDefault();
    const formData = new FormData();
    if (e.target.image.files[0]) {
      formData.set("image", e.target.image.files[0]);
    }
    formData.set("title", e.target.title.value);
    formData.set("body", e.target.description.value);

    dispatch(createPost(formData));
  }
  return (
    <>
      <div className="create-post-container">
        <div>
          <div className="create-post">
            <h2 className="fonts">Reportar incidencia</h2>
          </div>
        </div>

        <div>
          <form className="form-post" onSubmit={OnCreatePost}>
            <div>
              <label className="label">
                <h2 className="titletitle">
                  Título de la incidencia</h2>
              </label>
              <div>
                <input type="text" className="text" name="title" />
              </div>
            </div>
            <div>
              <label>
                <h2 className="posttitle">Incidencia</h2>
              </label>
              <div>
                <textarea className="textarea" name="description" />
              </div>
            </div>
            <div className="buttons">
              <button type="submit" className="submit">
                Reportar
              </button>
              <div className="select">
                <label className="Select-a-file" for="myfile">
                  Select a file:
                </label>
                <input type="file" className="myfile" name="image" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
