import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {MemoryRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';

import Property from "./property.jsx";
import {offers, reviews, leaflet, mapSettings} from "../../mocks/test-mocks";

it(`Property correctly renders`, () => {
  const mockStore = configureMockStore([thunk]);
  const state = {
    [`REVIEWS`]: {
      reviews,
    }
  };
  const store = mockStore(state);
  const tree = renderer
    .create(<Provider store={store}>
      <Router>
        <Property
          offers={offers}
          offerId={1}
          leaflet={leaflet}
          mapSettings={mapSettings}
        />
      </Router>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
