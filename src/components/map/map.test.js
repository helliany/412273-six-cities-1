import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map.jsx';
import {offers, leaflet, mapSettings} from "../../mocks/test-mocks";

it(`Map correctly renders`, () => {
  const coords = offers.map((offer) => offer.coords);
  const tree = renderer
    .create(<Map
      coords={coords}
      leaflet={leaflet}
      settings={mapSettings}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
