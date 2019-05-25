import React from "react";
import renderer from 'react-test-renderer';

import CitiesList from "./cities-list.jsx";
import {offers} from "../../mocks/test-mocks";

it(`CitiesList correctly renders`, () => {
  const cities = Array.from(offers.map((offer) => offer.city));
  const activeCity = cities[0];
  const tree = renderer
    .create(<CitiesList
      cities={cities}
      activeCity={activeCity}
      onCityChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
