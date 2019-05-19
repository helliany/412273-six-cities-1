import React from "react";
import renderer from 'react-test-renderer';

import OfferCard from "./offer-card.jsx";
import {testOffers} from "../../mocks/test-mocks";

it(`OfferCard correctly renders`, () => {
  const offer = testOffers[0];
  const tree = renderer
    .create(<OfferCard
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
