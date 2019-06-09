import React from "react";
import renderer from 'react-test-renderer';

import ReviewsItem from "./reviews-item.jsx";
import {reviews} from "../../mocks/test-mocks";

it(`ReviewsItem correctly renders`, () => {
  const review = reviews[0];
  const tree = renderer
    .create(<ReviewsItem
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
