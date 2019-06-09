import React from "react";
import renderer from 'react-test-renderer';

import ReviewsForm from "./reviews-form.jsx";

it(`ReviewsForm correctly renders`, () => {
  const tree = renderer
    .create(<ReviewsForm/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
