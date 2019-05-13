import React from "react";
import renderer from 'react-test-renderer';

import OfferCardList from "./offer-card-list.jsx";
import testMocks from "../../mocks/test-mocks";

it(`OfferCardList  correctly renders`, () => {
  const offers = testMocks;
  const tree = renderer
    .create(<OfferCardList
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
