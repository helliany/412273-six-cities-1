import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/main-page/main-page.jsx";
import offers from './mocks/offers';

import leaflet from 'leaflet';

const init = (cardOffers) => {
  ReactDOM.render(
      <MainPage
        offers = {cardOffers}
        leaflet={leaflet}
      />,
      document.querySelector(`#root`)
  );
};

init(offers);
