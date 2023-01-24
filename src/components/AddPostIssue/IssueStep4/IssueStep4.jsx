/* eslint-disable react-hooks/exhaustive-deps */
import esriConfig from "@arcgis/core/config";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IncidenceWhite from "../../../assets/svgs/IncidenceWhite.svg";
import MarkerIcon from "../../../assets/svgs/MarkerIcon.svg";
import Note from "../../../assets/svgs/Note.svg";
import { createPost } from "../../../features/posts/postsSlice";
import HeaderReportIssue from "../HeaderReportIssue/HeaderReportIssue";

const IssueStep4 = ({ setStep, formData, file }) => {
    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY;
    const { isSuccesful } = useSelector((state) => state.posts);
    const viewDiv = createRef();
    const dispatch = useDispatch();

    const handleSaveIssue = () => {
        dispatch(createPost({ ...formData, file }));
    };

    useEffect(() => {
        if (isSuccesful) {
            setStep(5);
        }
    }, [isSuccesful]);

    useEffect(() => {
        const map = new Map({
            basemap: "arcgis-light-gray",
        });

        new MapView({
            map: map,
            center: [formData.longitude, formData.latitude], // Longitude, latitude
            zoom: 18, // Zoom level
            container: viewDiv.current, // Div element
        });

        const graphicsLayer = new GraphicsLayer();
        const graphicsLayerMarker = new GraphicsLayer();
        map.add(graphicsLayer);
        map.add(graphicsLayerMarker);

        const point = {
            type: "point",
            longitude: formData.longitude,
            latitude: formData.latitude,
        };

        const symbol = {
            type: "picture-marker",
            url: "https://i.ibb.co/QMBDm0d/pin-incidencia.png",
            width: "28px",
            height: "34px",
            yoffset: "17px",
        };

        const pointGraphic = new Graphic({
            geometry: point,
            symbol: symbol,
        });
        graphicsLayer.add(pointGraphic);
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col">
            <HeaderReportIssue previousStep={3} setStep={setStep} />
            <div
                id="viewDiv"
                className="flex-1 border-0 min-h-[30%]"
                ref={viewDiv}
            ></div>
            <div className="flex items-center gap-3 bg-blue-3 px-6 py-4 text-white">
                <div>
                    <img src={IncidenceWhite} alt="" />
                </div>
                <span>{formData.title}</span>
            </div>
            <div className="flex items-center gap-3 bg-neutral-2 px-7 py-4">
                <div>
                    <img src={MarkerIcon} alt="" />
                </div>
                <span>{formData.address}</span>
            </div>
            <div className="pl-10 relative py-4 pr-7 flex">
                <div className="absolute left-0 top-0 flex items-center mt-5 pl-6 pointer-events-none">
                    <img src={Note} alt="" />
                </div>
                <span className="pl-5 whitespace-pre-wrap w-full">
                    {formData.desc}
                </span>
            </div>
            <div className="w-full bg-neutral-1 flex flex-col items-center justify-center">
                {file && <img src={URL.createObjectURL(file)} alt="" />}
            </div>
            <div className="w-full flex flex-col gap-2 justify-center items-center py-8 h-1/6">
                <button
                    onClick={() => handleSaveIssue()}
                    className="text-white w-5/6 text-center disabled:opacity-70 text-[17px] block bg-black hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-[12px] p-2.5"
                >
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default IssueStep4;
