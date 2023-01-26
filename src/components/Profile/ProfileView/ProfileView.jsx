import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Location from "../../../assets/location.svg";
import IncidenceBlack from "../../../assets/svgs/IncidenceBlack.svg";
import { getInfo } from "../../../features/auth/authSlice";
import "./ProfileView.scss";

const ProfileView = () => {
    const { user } = useSelector((state) => state.auth);
    const { posts } = useSelector((state) => state.posts);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        dispatch(getInfo());
        // eslint-disable-next-line
    }, [posts]);

    if (!user) {
        return <p>Loading...</p>;
    }

    const post = user.user.postIds.map((post, i) => {
        const normalizeAddress = (address) => {
            return address
                .split(" ")
                .map((s) => s[0] + s.slice(1, s.length).toLowerCase())
                .join(" ");
        };

        return (
            <div
                key={i}
                className="w-5/6 border border-neutral-5 rounded-[12px]"
            >
                <div>
                    {post.image_path && (
                        <div className="rounded-t-[12px]">
                            <img
                                className="w-full rounded-t-[12px]"
                                src={API_URL + "/" + post.image_path}
                                alt=""
                            />
                        </div>
                    )}
                    <div>
                        <div
                            className={`vector-container ${
                                post.image_path ? "" : "rounded-t-[12px]"
                            }`}
                        >
                            <img
                                src={IncidenceBlack}
                                alt="Logo"
                                className="logo-img ml-5"
                            />
                            <span className="px-2 py-4">{post.incidence}</span>
                        </div>
                        <div className="location-container rounded-b-[12px]">
                            <img
                                src={Location}
                                alt="Logo"
                                className="loc-img ml-6"
                            />
                            <span className="description-title px-2 py-4 w-full">
                                {post.address
                                    ? normalizeAddress(post.address)
                                    : ""}
                            </span>
                        </div>
                        <div className="w-full rounded-b-[12px] flex justify-center py-2">
                            <button
                                type="button"
                                onClick={() => {
                                    navigate(`/post/${post._id}`);
                                }}
                                className="text-white text-[17px] disabled:opacity-70 bg-black flex justify-center items-center gap-2.5 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] py-2.5 px-6"
                            >
                                <span>Ver</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="flex flex-col items-center gap-2 pb-6">{post}</div>;
};

export default ProfileView;
