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

    const map = new Map({
        basemap: "arcgis-navigation", // streets, navigation, topograhic, imagery
    });

    // const test = async () => {
    //     console.log("entra test");
    //     console.log(view);
    //     console.log(
    //         view.toMap({ x: 724497.0337762235, y: 4374198.5921510365 })
    //     );
    //     const res = await locationToAddress(
    //         "https://geoportal.valencia.es/server/rest/services/Geocodificadores/Callejero_Municipal/GeocodeServer",
    //         {
    //             location: view.toMap({
    //                 x: 724497.0337762235,
    //                 y: 4374198.5921510365,
    //             }),
    //         }
    //     );

    //     console.log(res);
    // };

    useEffect(() => {
        const view = new MapView({
            map: map,
            center: [-0.405189, 39.483755], // Longitude, latitude
            zoom: 16, // Zoom level
            container: viewDiv.current, // Div element
        });

        // const sources = [
        //     {
        //         url: "https://geoportal.valencia.es/server/rest/services/Geocodificadores/Callejero_Municipal/GeocodeServer",
        //         placeholder: "Darwin",
        //         maxResults: 3,
        //     },
        // ];

        const searchWidget = new Search({
            //Add Search widget
            view: view,
            // sources: sources
        });

        searchWidget.on("search-complete", function (event) {
            const name = event.results[0].results[0].name;
            const street = name.split(",")[0];
            const streetElements = street.split(" ");
            const number = streetElements[streetElements.length - 1];
            if (/[1-9]/g.test(number)) {
                console.log("Dirección válida");
                console.log("Calle:", street.slice(0, -1));
                console.log("Número:", number);
            } else {
                console.log(
                    "Dirección no válida. Falta el número de la calle al final"
                );
            }

            // test();
        });

        setSearch(searchWidget);
        setView(view);

        view.ui.add(searchWidget, "top-right");
    }, []);

    return (
        <div>
            <div id="viewDiv" ref={viewDiv}></div>
        </div>
    );
};

export default TestMap;