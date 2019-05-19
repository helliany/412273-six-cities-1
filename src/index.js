import React from "react";
import ReactDOM from "react-dom";
import leaflet from 'leaflet';

import MainPage from "./components/main-page/main-page.jsx";
import offers from './mocks/offers';

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

const init = (cardOffers) => {
  ReactDOM.render(
      <MainPage
        offers = {cardOffers}
        leaflet = {leaflet}
        mapSettings = {mapSettings}
      />,
      document.querySelector(`#root`)
  );
};

init(offers);
