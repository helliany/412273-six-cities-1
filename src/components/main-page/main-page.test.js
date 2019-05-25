import React from "react";
import renderer from 'react-test-renderer';

import MainPage from "./main-page.jsx";
import {offers, leaflet, mapSettings} from "../../mocks/test-mocks";

it(`MainPage correctly renders`, () => {
  const cities = Array.from(offers.map((offer) => offer.city));
  const activeCity = cities[0];
  const selectedOffers = offers.filter((offer) => offer.city === activeCity);

  const tree = renderer
    .create(<MainPage
      offers={offers}
      selectedOffers={selectedOffers}
      leaflet={leaflet}
      mapSettings={mapSettings}
      cities={cities}
      activeCity={activeCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
