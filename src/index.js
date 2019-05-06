import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/main-page/main-page.jsx";

const init = () => {
  const places = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
  ];

  ReactDOM.render(
      <MainPage
        places = {places}
      />,
      document.querySelector(`#root`)
  );
};

init();
