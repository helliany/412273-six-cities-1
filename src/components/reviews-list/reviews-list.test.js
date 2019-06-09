import React from "react";
import renderer from 'react-test-renderer';

import {ReviewsList} from "./reviews-list.jsx";
import {reviews} from "../../mocks/test-mocks";

it(`ReviewsList correctly renders`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
      offerId={1}
      loadReviews={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
