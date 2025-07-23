import './App.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {useEffect} from "react";
import {OSM} from "ol/source";
import TileLayer from "ol/layer/Tile";

function App() {

    MapView()

    return (
        <div className="App">
            <header className="App-header">
                <div id="map" style={{width: "100%", height: "1000px"}}></div>
            </header>
        </div>
    );
}

function MapView() {
    useEffect(() => {
        var path

        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [-8769834.48102, 4572997.05086],
                zoom: 8.7,
            }),
        });

        return () => {
            map.setTarget(null);
        };
    }, []);
}

export default App;
