import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map.jsx';
import {offers, leaflet, mapSettings} from "../../mocks/test-mocks";

it(`Map correctly renders`, () => {
  const coords = offers.map((offer) => offer.location);
  const activeCity = offers[0].city;
  const tree = renderer
    .create(<Map
      coords={coords}
      location={activeCity.location}
      leaflet={leaflet}
      settings={mapSettings}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
