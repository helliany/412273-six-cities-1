import React from "react";
import renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';

import Header from "./header.jsx";

it(`Header correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <Header
        user={{}}
        isAuthorizationRequired={false}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
