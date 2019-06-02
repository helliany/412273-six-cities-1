import React from "react";
import renderer from 'react-test-renderer';

import {SignIn} from "./sign-in.jsx";

it(`SignIn page correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      onchangeAuthorization={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
