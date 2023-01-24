/* eslint-disable react-hooks/exhaustive-deps */
import esriConfig from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map";
import * as locator from "@arcgis/core/rest/locator";
import MapView from "@arcgis/core/views/MapView";
import React, { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Close from "../../assets/svgs/Close.svg";
import IncidenceBlack from "../../assets/svgs/IncidenceBlack.svg";
import IncidenceWhite from "../../assets/svgs/IncidenceWhite.svg";
import Info from "../../assets/svgs/Info.svg";
import Location from "../../assets/svgs/Location.svg";
import MarkerIcon from "../../assets/svgs/MarkerIcon.svg";
import { getAllPosts } from "../../features/posts/postsSlice";
import Header from "../Header/Header";
import "./HomeMap.scss";

const HomeMap = () => {
    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY;
    const { posts } = useSelector((state) => state.posts);
    const [addressSelected, setAddressSelected] = useState("");
    const [location, setLocation] = useState({
        longitude: null,
        latitude: null,
    });
    const [type, setType] = useState("");
    const [oldIncidence, setOldIncidence] = useState({
        _id: "",
        incidence: "",
    });
    const [validAddress, setValidAddress] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const viewDiv = createRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const normalizeAddress = () => {
        return addressSelected
            .split(" ")
            .map((s) => s[0] + s.slice(1, s.length).toLowerCase())
            .join(" ");
    };

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    useEffect(() => {
        const map = new Map({
            basemap: "arcgis-light-gray",
        });

        const view = new MapView({
            map: map,
            center: [-0.405189, 39.483755], // Longitude, latitude
            zoom: 16, // Zoom level
            container: viewDiv.current, // Div element
        });

        const graphicsLayer = new GraphicsLayer();
        const graphicsLayerMarker = new GraphicsLayer();
        map.add(graphicsLayer);
        map.add(graphicsLayerMarker);

        const symbol = {
            type: "picture-marker",
            url: "https://i.ibb.co/QMBDm0d/pin-incidencia.png",
            width: "28px",
            height: "34px",
            yoffset: "17px",
        };

        for (const post of posts) {
            if (post.longitude && post.latitude) {
                const point = {
                    type: "point",
                    longitude: post.longitude,
                    latitude: post.latitude,
                };
                const incidenceGraphic = new Graphic({
                    geometry: point,
                    symbol: symbol,
                });

                incidenceGraphic.setAttribute("_id", post._id);
                incidenceGraphic.setAttribute("incidence", post.incidence);

                graphicsLayer.add(incidenceGraphic);
            }
        }

        graphicsLayer.on("click", (e) => {
            console.log(e);
        });

        const serviceUrl =
            "https://geoportal.valencia.es/server/rest/services/Geocodificadores/Callejero_Municipal/GeocodeServer";

        view.on("click", async function (event) {
            const hit = await view.hitTest(event, { include: graphicsLayer });
            if (hit.results.length > 0) {
                setType("oldIncidence");
                graphicsLayerMarker.removeAll();
                setValidAddress(true);
                const graphic = hit.results[0].graphic;
                setOldIncidence({
                    ...graphic.attributes,
                });
            } else {
                setType("newIncidence");
                const params = {
                    location: event.mapPoint,
                };

                const res = await locator.locationToAddress(serviceUrl, params);
                setAddressSelected(res.address);
                setLocation({
                    longitude: event.mapPoint.longitude,
                    latitude: event.mapPoint.latitude,
                });
                if (res.attributes.AddNum === "") {
                    setShowErrorMessage(true);
                    setValidAddress(false);
                } else {
                    setShowErrorMessage(false);
                    setValidAddress(true);
                }

                // Delete previous marker
                graphicsLayerMarker.removeAll();
                const point = {
                    type: "point",
                    longitude: event.mapPoint.longitude,
                    latitude: event.mapPoint.latitude,
                };
                const symbol = {
                    type: "picture-marker",
                    url:
                        res.attributes.AddNum === ""
                            ? "https://i.ibb.co/swN8wFw/location-indic.png"
                            : "https://i.ibb.co/chwhD4X/location-indic2.png",
                    width: "40px",
                    height: "40px",
                };
                const pointGraphic = new Graphic({
                    geometry: point,
                    symbol: symbol,
                });
                graphicsLayerMarker.add(pointGraphic);
            }
            view.goTo({
                center: [event.mapPoint.longitude, event.mapPoint.latitude],
            });
        });
    }, [posts]);

    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Header />
            <div className="w-full h-full relative">
                <div
                    id="viewDiv"
                    className="w-full h-full border-0"
                    ref={viewDiv}
                ></div>
                <div
                    className={`bg-orange-4 w-full absolute top-0 text-[14px] px-6 py-4 flex justify-between gap-3.5 items-center ${
                        showErrorMessage
                            ? "showErrorMessageMap"
                            : "hideErrorMessageMap"
                    }`}
                >
                    <span>
                        <img
                            src={Location}
                            alt=""
                            className="text-[22px] w-8"
                        />
                    </span>
                    <span>
                        La ubicación marcada no es válida para reportar una
                        incidencia
                    </span>
                    <span>
                        <img
                            src={Close}
                            alt=""
                            className="text-[16px] w-6"
                            onClick={() => setShowErrorMessage(false)}
                        />
                    </span>
                </div>
                <div
                    className={`w-full absolute bottom-0 flex flex-col bottomDivMap ${
                        !validAddress ? "closed" : ""
                    }`}
                >
                    <div className="bg-blue-4 flex items-center gap-4 px-6 py-3">
                        {type === "newIncidence" && (
                            <>
                                <div>
                                    <img src={MarkerIcon} alt="" />
                                </div>
                                <span className="text-[17px]">
                                    {normalizeAddress()}
                                </span>
                            </>
                        )}
                        {type === "oldIncidence" && (
                            <>
                                <div>
                                    <img src={IncidenceBlack} alt="" />
                                </div>
                                <span className="text-[17px]">
                                    {oldIncidence.incidence}
                                </span>
                            </>
                        )}
                    </div>
                    <div className="bg-white flex justify-center gap-2 items-center py-8">
                        {type === "newIncidence" && (
                            <button
                                type="button"
                                onClick={() => {
                                    navigate("/report-issue", {
                                        state: {
                                            longitude: location.longitude,
                                            latitude: location.latitude,
                                            address: addressSelected,
                                        },
                                    });
                                }}
                                className="text-white w-5/6 text-[17px] disabled:opacity-70 bg-black flex justify-center items-center gap-2.5 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                            >
                                <img src={IncidenceWhite} alt="" />
                                <span>Reportar</span>
                            </button>
                        )}
                        {type === "oldIncidence" && (
                            <button
                                type="button"
                                onClick={() => {
                                    navigate(`/post/${oldIncidence._id}`);
                                }}
                                className="text-neutral-5 w-5/6 text-[17px] disabled:opacity-70 flex justify-center items-center gap-2.5 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5 border border-neutral-5"
                            >
                                <img src={Info} alt="" />
                                <span>Ver detalles</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMap;
