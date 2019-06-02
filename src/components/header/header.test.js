import React from "react";
import renderer from 'react-test-renderer';

import Header from "./header.jsx";

it(`Header correctly renders`, () => {
  const tree = renderer
    .create(<Header
      user={{}}
      isAuthorizationRequired={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
