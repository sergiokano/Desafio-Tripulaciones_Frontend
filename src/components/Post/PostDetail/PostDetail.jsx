/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Graffiti from "../../../assets/pngs/graffiti.png";
// import Polifilo from "../../../assets/pngs/polifilo.png";
import { MdOutlineModeComment, MdOutlinePlace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../../features/posts/postsSlice";
import Header from "../../Header/Header";

const PostDetail = () => {
    const { post } = useSelector((state) => state.posts);
    const { _id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("post");
        dispatch(getById(_id));
    }, []);

    if (!post) {
        return;
    }
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

                        <span className="ml-6 mr-6 mt-7 flex flex-row left-6 font-bold leading-6 items-center">
                            <MdOutlinePlace className="text-20 mr-0.5" />
                            <span className="text-[11px]">{post.address}</span>
                            <span className="text-[11px]  relative ml-auto ">
                                Nº Validaciones:
                                {/* {post ? post.verification.length : null} */}
                            </span>
                        </span>
                        <div className="ml-6 mt-3 text-[13px] text-blue-2 font-bold">
                            Daños espacio público
                        </div>

                        <div className="flex flex-col mt-5 border border-neutral-2 bg-neutral-1 ">
                            <div className=" text-[14px]">
                                <div className="flex flex-col  ml-6 mt-3.5 mb-3.5">
                                    <div className="flex flex-row space-x-2 items-center">
                                        <MdOutlineModeComment />
                                        <span className="font-bold text-[11px]">
                                            {post.userId}
                                        </span>
                                    </div>
                                    <span className="relative font-text leading-6">
                                        {post.description}
                                    </span>
                                </div>

                                {post.comments.length > 0 ? (
                                    <div className="border border-t-neutral-2 ">
                                        <div className="flex flex-col  ml-6 mt-3.5 mb-3.5">
                                            <div className="flex flex-row space-x-2 items-center">
                                                <MdOutlineModeComment />
                                                <span className="font-bold text-[11px]">
                                                    {post.userId}
                                                </span>
                                            </div>
                                            <span className="relative font-text leading-6 ">
                                                {post.description}
                                            </span>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
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
