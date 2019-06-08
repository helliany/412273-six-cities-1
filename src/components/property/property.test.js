import React from "react";
import renderer from 'react-test-renderer';

import Property from "./property.jsx";
import {offers} from "../../mocks/test-mocks";

it(`Property correctly renders`, () => {
  const offer = offers[0];
  const tree = renderer
    .create(<Property
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
