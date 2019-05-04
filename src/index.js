import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    locations: [
      {
        name: `Paris`,
        active: false,
      },
      {
        name: `Cologne`,
        active: false,
      },
      {
        name: `Brussels`,
        active: false,
      },
      {
        name: `Amsterdam`,
        active: true,
      },
      {
        name: `Hamburg`,
        active: false,
      },
      {
        name: `Dusseldorf`,
        active: false,
      },
    ],
    places: [
      {
        name: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        premium: true,
        price: 120,
        favorite: false,
        rating: 93,
        img: `apartment-01.jpg`,
      },
      {
        name: `Wood and stone place`,
        type: `Private room`,
        premium: false,
        price: 80,
        favorite: true,
        rating: 80,
        img: `room.jpg`,
      },
      {
        name: `Canal View Prinsengracht`,
        type: `Apartment`,
        premium: false,
        price: 132,
        favorite: false,
        rating: 70,
        img: `apartment-02.jpg`,
      },
      {
        name: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        premium: true,
        price: 180,
        favorite: false,
        rating: 100,
        img: `apartment-03.jpg`,
      },
    ]};

  ReactDOM.render(
      <App
        locations = {settings.locations}
        places = {settings.places}
      />,
      document.querySelector(`#root`)
  );
};

init();
