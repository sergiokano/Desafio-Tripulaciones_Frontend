/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import Polifilo from "../../../assets/pngs/polifilo.png";
import { useState } from "react";
import { MdOutlineModeComment, MdOutlinePlace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
    addLike,
    getById,
    removeLike,
} from "../../../features/posts/postsSlice";
import Header from "../../Header/Header";

const PostDetail = () => {
    const { post } = useSelector((state) => state.posts);
    const user = JSON.parse(localStorage.getItem("user"));
    const [showTextarea, setShowTextarea] = useState(false);
    const { _id } = useParams();

    const handleCreateComment = () => {};

    const dispatch = useDispatch();

    const postIncludesUserValidation = () => {
        return post.verification.includes(user.user._id);
    };

    useEffect(() => {
        dispatch(getById(_id));
    }, []);

    const handleLikeClick = (_id) => {
        dispatch(addLike(_id));
    };

    const handleUnlikeClick = (_id) => {
        dispatch(removeLike(_id));
    };

    if (!post) {
        return;
    }
    return (
        <>
            <div className="flex flex-col items-center w-screen h-screen">
                <Header />
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 flex-col mt-6  justify-center ">
                        {post.image_path && post.image_path !== "" && (
                            <div className="flex justify-center items-center p-6">
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        "/" +
                                        post.image_path
                                    }
                                    alt=""
                                    className="w-full rounded-[12px]"
                                />
                            </div>
                        )}
                        <div className="w-full flex flex-col">
                            <span className="relative left-6 font-bold leading-6 text-[20px]">
                                {post.incidence}
                            </span>

                            <span className="ml-6 mr-6 mt-7 flex flex-row left-6 font-bold leading-6 items-center">
                                <MdOutlinePlace className="text-20 mr-0.5" />
                                <span className="text-[11px]">
                                    {post.address}
                                </span>
                                <span className="text-[11px]  relative ml-auto ">
                                    Nº Validaciones: {post.verification.length}
                                </span>
                            </span>
                            <div className="ml-6 mt-3 text-[13px] text-blue-2 font-bold">
                                {post.subCategory}
                            </div>

                            <div className="flex flex-col mt-5 border border-neutral-2 bg-neutral-1 overflow-auto max-h-52">
                                <div className=" text-[14px]">
                                    <div className="flex flex-col  ml-6 mt-3.5 mb-3.5">
                                        <div className="flex flex-row space-x-2 items-center">
                                            <MdOutlineModeComment />
                                            <span className="font-bold text-[11px]">
                                                {post.userId.username}
                                            </span>
                                        </div>
                                        <span className="relative font-text leading-6">
                                            {post.description}
                                        </span>
                                    </div>

                                    {post.comments.length > 0
                                        ? post.comments.map((comment, i) => {
                                              return (
                                                  <div
                                                      className="border border-t-neutral-2 "
                                                      key={i}
                                                  >
                                                      <div className="flex flex-col  ml-6 mt-3.5 mb-3.5">
                                                          <div className="flex flex-row space-x-2 items-center">
                                                              <MdOutlineModeComment />
                                                              <span className="font-bold text-[11px]">
                                                                  {
                                                                      comment
                                                                          .userId
                                                                          .username
                                                                  }
                                                              </span>
                                                          </div>
                                                          <span className="relative font-text leading-6 whitespace-pre-wrap ">
                                                              {comment.comment}
                                                          </span>
                                                      </div>
                                                  </div>
                                              );
                                          })
                                        : null}
                                </div>
                            </div>

                            {!showTextarea && (
                                <div className="w-full flex gap-2 ml-6 mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setShowTextarea(true)}
                                        className="text-bg-neutral-5 flex gap-2 items-center text-[13px] hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[40px] p-2.5 border border-neutral-2"
                                    >
                                        Añadir comentario
                                        <MdOutlineModeComment className="text-[14px]" />
                                    </button>
                                </div>
                            )}
                            {showTextarea && (
                                <div className="w-full flex flex-col gap-2 px-6 mt-8">
                                    <textarea
                                        id="message"
                                        rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Write your thoughts here..."
                                    ></textarea>
                                    <div className="flex flex-row-reverse gap-2"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    {!postIncludesUserValidation() && (
                        <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
                            <button
                                type="button"
                                onClick={() => handleLikeClick(post._id)}
                                className="text-white w-5/6 text-[17px] bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                            >
                                Validar Incidencia
                            </button>
                        </div>
                    )}
                    {postIncludesUserValidation() && (
                        <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
                            <button
                                type="button"
                                onClick={() => handleUnlikeClick(post._id)}
                                className="text-white w-5/6 text-[17px] bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                            >
                                Deshacer Validación
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PostDetail;
