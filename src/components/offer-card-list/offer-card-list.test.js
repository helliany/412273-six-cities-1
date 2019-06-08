import React from "react";
import renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';

import OfferCardList from "./offer-card-list.jsx";
import {offers} from "../../mocks/test-mocks";

it(`OfferCardList  correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <OfferCardList
        offers={offers}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
