import axios from "axios";
const API_URL = "http://localhost:8080";

const createPost = async (postData) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/posts/", postData, {
    headers: {
      authorization: user?.token,
    },
  });

  return res.data;
};
const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/posts");

  return res.data;
};
const getById = async (_id) => {
  const res = await axios.get(API_URL + "/posts/id/" + _id);
  return res.data;
};
const getPostByName = async (title) => {
  const res = await axios.get(API_URL + "/posts/search/" + title);
  return res.data;
};
const deletePost = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/id/" + id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};
const like = async (_id) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/like/" + _id, {}, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;

}

const unLike = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/disLike/" + _id, {}, {
      headers: {
          authorization: user?.token,
      },
  });
  return res.data
}
const updatePost = async (post) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/" + post.id, post, {
        headers: {
            authorization: user?.token
        }
    })


    return res.data
};


const comment = async (comment) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/comments/" + comment._id, comment, 
    { headers: { authorization: user?.token } });
    

    return res.data
};

const postsService = {
  createPost,
  getAllPosts,
  getById,
  getPostByName,
  deletePost,
  like,
  unLike,
  updatePost,
  comment
};

export default postsService;
