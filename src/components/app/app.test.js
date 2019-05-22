import React from "react";
import renderer from 'react-test-renderer';

import {App} from "./app.jsx";
import {offers, leaflet, mapSettings} from "../../mocks/test-mocks";

it(`App correctly renders`, () => {
  const cities = Array.from(offers.map((offer) => offer.city));
  const activeCity = cities[0];
  const tree = renderer
    .create(<App
      offers={offers}
      leaflet={leaflet}
      mapSettings={mapSettings}
      cities={cities}
      activeCity={activeCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
