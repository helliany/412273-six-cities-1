import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";
import leaflet from 'leaflet';

import App from "./components/app/app.jsx";

const mapSettings = {
  center: [52.38333, 4.9],
  zoom: 12,
  zoomControl: false,
  marker: true,
  icon: leaflet.icon({
    iconUrl: `img/map-pin.svg`,
    iconSize: [30, 30]
  }),
};

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(<Provider store={store}>
    <App
      leaflet = {leaflet}
      mapSettings = {mapSettings}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
