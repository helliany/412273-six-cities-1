import React from "react";
import renderer from 'react-test-renderer';

import CitiesList from "./cities-list.jsx";
import {offers} from "../../mocks/test-mocks";

it(`CitiesList correctly renders`, () => {
  const cities = offers.map((offer) => offer.city.name);
  const activeCity = offers[0].city.name;

  const tree = renderer
    .create(<CitiesList
      cities={cities}
      activeCityName={activeCity}
      onCityChange={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
