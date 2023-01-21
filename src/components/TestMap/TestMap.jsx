/* eslint-disable react-hooks/exhaustive-deps */
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
// import { locationToAddress } from "@arcgis/core/rest/locator";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import React, { createRef, useEffect, useState } from "react";
import "./TestMap.scss";

const TestMap = () => {
    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY;
    const viewDiv = createRef();
    const [view, setView] = useState(null);
    const [search, setSearch] = useState(null);
    const [data, setData] = useState({
        street: "",
        number: "",
    });

    const validateSearchResult = (e) => {
        const name = e.results[0].results[0].name;
        const street = name.split(",")[0];
        const streetElements = street.split(" ");
        const number = streetElements[streetElements.length - 1];
        if (/[1-9]/g.test(number)) {
            console.log("Dirección válida");
            console.log("Calle:", street.slice(0, -1));
            console.log("Número:", number);
            setData({
                ...data,
                street: street.slice(0, -1),
                number,
            });
        } else {
            console.log(
                "Dirección no válida. Falta el número de la calle al final"
            );
        }
    };

    useEffect(() => {
        const map = new Map({
            basemap: "arcgis-navigation", // streets, navigation, topograhic, imagery
        });

        const view = new MapView({
            map: map,
            center: [-0.405189, 39.483755], // Longitude, latitude
            zoom: 16, // Zoom level
            container: viewDiv.current, // Div element
        });

        const searchWidget = new Search({
            //Add Search widget
            view: view,
        });

        searchWidget.on("search-complete", validateSearchResult);

        setSearch(searchWidget);
        setView(view);

        view.ui.add(searchWidget, "top-right");
    }, []);

    return (
        <div className="flex flex-col items-center w-screen">
            <div className="flex flex-col w-9/12">
                <div id="viewDiv" className="w-full" ref={viewDiv}></div>
                <form className="py-4">
                    <label
                        htmlFor="input-street"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Calle
                    </label>
                    <input
                        type="text"
                        id="input-street"
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={data.street}
                        disabled
                        readOnly
                    />
                    <label
                        htmlFor="input-street"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Número
                    </label>
                    <input
                        type="text"
                        id="input-number"
                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={data.number}
                        disabled
                        readOnly
                    />
                    <div className="mt-10 flex flex-row-reverse">
                        <button
                            type="button"
                            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TestMap;
