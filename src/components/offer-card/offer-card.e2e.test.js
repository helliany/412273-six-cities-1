import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OfferCard from "./offer-card.jsx";
import testMocks from "../../mocks/test-mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Click on card title link correctly works`, () => {
  const offer = testMocks[0];
  const clickHandler = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={offer}
    onTitleClick={clickHandler}
  />);
  const link = offerCard.find(`.place-card__name a`);
  link.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Click on card img link correctly works`, () => {
  const offer = testMocks[0];
  const clickHandler = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={offer}
    onImgClick={clickHandler}
  />);
  const link = offerCard.find(`.place-card__image-wrapper a`);
  link.simulate(`click`, {preventDefault() { }});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
