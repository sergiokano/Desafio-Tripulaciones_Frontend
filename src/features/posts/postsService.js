import axios from "axios";
const API_URL =  "http://localhost:8080"



const createPost = async (postData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.post(API_URL + "/posts/", postData, {
        headers: {
            authorization: user?.token
        }
    });

    return res.data
};




const postsService = {
    
    createPost
    
};

export default postsService