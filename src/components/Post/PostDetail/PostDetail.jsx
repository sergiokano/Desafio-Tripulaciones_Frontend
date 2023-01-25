/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MdOutlineModeComment, MdOutlinePlace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    addLike,
    createComment,
    getById,
    removeLike,
} from "../../../features/posts/postsSlice";
import Header from "../../Header/Header";

const PostDetail = () => {
    const { post } = useSelector((state) => state.posts);
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const [showModal, setShowModal] = useState(false);
    const { _id } = useParams();
    const dispatch = useDispatch();

    const handleCreateComment = () => {
        dispatch(createComment({ _id: post._id, comment }));
        handleCloseModal();
    };

    const handleOpenModal = () => {
        setShowModal(true);
        document.body.style.overflow = "hidden";
    };
    const handleCloseModal = () => {
        setShowModal(false);
        document.body.style.overflow = "visible";
    };

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
            <div className="relative flex flex-col items-center min-w-full min-h-screen">
                <Header />
                {showModal && (
                    <div
                        onMouseDown={handleCloseModal}
                        className="fixed w-full h-full bg-black bg-opacity-50 z-20 flex justify-center items-center overflow-hidden max-h-screen"
                    >
                        <div
                            onMouseDown={(e) => e.stopPropagation()}
                            className="bg-neutral-1 rounded-[12px] md:text-xl px-6 py-3 flex flex-col gap-3 min-w-[75%] max-h-[75%]"
                        >
                            <span className="w-full text-center font-semibold py-2">
                                Añade tu cometario
                            </span>
                            <div className="max-h-[50%]">
                                <textarea
                                    id="message"
                                    rows="10"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="block resize-none text-sm bg-neutral-2 h-full p-2.5 w-full outline-0 border-gray-300 focus:ring-orange-2 text-gray-900 rounded-[12px] border"
                                    placeholder="Escribe tu comentario aquí"
                                ></textarea>
                            </div>
                            <div className="flex justify-between md:justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-white w-3/5 md:w-auto md:px-4 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5 text-neutral-5 border border-neutral-5"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCreateComment}
                                    className="text-white bg-black w-3/5 md:w-auto md:px-4 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex-1 w-full flex flex-col">
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
                            <span className="ml-6 font-bold leading-6 text-[20px]">
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

                            <div className="w-full flex gap-2 pl-6 pt-7">
                                <button
                                    type="button"
                                    onClick={() => handleOpenModal()}
                                    className="text-bg-neutral-5 flex gap-2 items-center text-[13px] hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[40px] p-2.5 border border-neutral-2"
                                >
                                    Añadir comentario
                                    <MdOutlineModeComment className="text-[14px]" />
                                </button>
                            </div>
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
