import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createPost = async (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();
    formData.append("incidence", data.title);
    formData.append("description", data.desc);
    formData.append("address", data.address);
    formData.append(
        "code",
        data.category + data.subCategory + data.subCategoryDetail
    );
    formData.append("longitude", data.longitude);
    formData.append("latitude", data.latitude);
    if (data.file) formData.append("image", data.file);

    const res = await axios.post(API_URL + "/posts", formData, {
        headers: { authorization: user.token },
    });

    return res.data;
};

const postsService = {
    createPost,
};
export default postsService;
