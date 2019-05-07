import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from "./main-page.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Click on card title link correctly works`, () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(<MainPage
    places={[
      `Beautiful apartment`,
      `Wood and stone place`,
      `Nice, warm apartment`,
    ]}
    onClick={clickHandler}
  />);
  const titleLink = mainPage.find(`.place-card__name a`).first();
  titleLink.simulate(`click`, {preventDefault() { }});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
