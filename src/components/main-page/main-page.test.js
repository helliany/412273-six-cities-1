import React from "react";
import renderer from 'react-test-renderer';
import MainPage from "./main-page.jsx";

it(`MainPage correctly renders`, () => {
  const tree = renderer
    .create(<MainPage
      places={[
        `Beautiful apartment`,
        `Wood and stone place`,
        `Nice, warm apartment`
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
