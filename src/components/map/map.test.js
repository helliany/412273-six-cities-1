import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map.jsx';
import {testOffers, testLeaflet, mapSettings} from "../../mocks/test-mocks";

it(`Map correctly renders`, () => {
  const offers = testOffers;
  const leaflet = testLeaflet;

  const tree = renderer
    .create(<Map
      offers={offers}
      leaflet={leaflet}
      settings={mapSettings}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
