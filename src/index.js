import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/main-page/main-page.jsx";
import offers from './mocks/offers';

const init = (cardOffers) => {
  ReactDOM.render(
      <MainPage
        offers = {cardOffers}
      />,
      document.querySelector(`#root`)
  );
};

init(offers);
