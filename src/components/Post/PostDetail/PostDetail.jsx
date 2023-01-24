import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Google from "../../../assets/svgs/Google.svg";
import Graffiti from "../../../assets/pngs/graffiti.png";
import Polifilo from "../../../assets/pngs/polifilo.png";
import { getById } from "../../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Header/Header";
import { MdOutlinePlace } from "react-icons/md";

const PostDetail = () => {
  const { post } = useSelector((state) => state.posts);
  const { _id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  console.log("post", post);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Header />
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-1 flex-col mt-6 justify-center ">
          <div className="flex ml-6 flex-row gap-6 items-center w-full overflow-x-scroll">
            <img src={Graffiti} alt="" className="w-5/5" />
            <img src={Graffiti} alt="" className="w-5/5" />
          </div>
          <div className="w-full mt-6 flex flex-col">
            <span className="relative left-6 font-bold leading-6 text-[20px]">
              {post.incidence}
            </span>
            {/* <span className="flex"> */}
              <span className="ml-6 mr-6 mt-7 flex flex-row left-6 font-bold leading-6 items-center">
                <MdOutlinePlace className="text-20 mr-0.5" />
                <span className="text-[11px]">{post.address}</span>
                <span className="text-[11px] relative ml-auto ">Nº Validaciones: {post.verification.length} </span>
              </span>
            {/* </span> */}
            <span className="relative left-10  font-text overflow-hidden leading-6 text-[15px]">
              {post.description}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
          <button
            type="button"
            // onClick={() => navigate("/login")}
            className="text-white w-5/6 text-[17px] bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
          >
            Validar Incidencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
