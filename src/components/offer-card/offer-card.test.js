import React from "react";
import renderer from 'react-test-renderer';
import OfferCard from "./offer-card.jsx";

const mocks = {
  name: `Beautiful location`,
  type: `Apartment`,
  premium: true,
  price: 120,
  favorite: false,
  rating: 93,
  img: `path`,
  id: `offer-1`,
};

it(`OfferCard correctly renders`, () => {
  const offer = mocks;
  const tree = renderer
    .create(<OfferCard
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
