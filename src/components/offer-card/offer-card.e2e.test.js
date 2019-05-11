import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from "./offer-card.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  name: `Beautiful location`,
  type: `Apartment`,
  premium: true,
  price: 120,
  favorite: false,
  rating: 93,
  img: `path`,
  id: `offer-1`,
};

it(`Click on card title link correctly works`, () => {
  const offer = mocks;
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
  const offer = mocks;
  const clickHandler = jest.fn();
  const offerCard = shallow(<OfferCard
    offer={offer}
    onImgClick={clickHandler}
  />);
  const link = offerCard.find(`.place-card__image-wrapper a`);
  link.simulate(`click`, {preventDefault() { }});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
