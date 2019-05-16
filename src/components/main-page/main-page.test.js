import React from "react";
import renderer from 'react-test-renderer';

import MainPage from "./main-page.jsx";
import {testOffers, testLeaflet} from "../../mocks/test-mocks";

it(`MainPage correctly renders`, () => {
  const offers = testOffers;
  const leaflet = testLeaflet;

  const tree = renderer
    .create(<MainPage
      offers={offers}
      leaflet={leaflet}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
