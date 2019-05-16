const testOffers = [
  {
    name: `Beautiful location`,
    type: `Apartment`,
    premium: true,
    price: 120,
    favorite: false,
    rating: 93,
    img: `path`,
    id: `offer-1`,
    coords: [52.3909553943508, 4.85309666406198],
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
    price: 80,
    favorite: true,
    rating: 80,
    img: `path`,
    id: `offer-2`,
    coords: [52.369553943508, 4.85309666406198],
  },
];

const testLeaflet = {
  map() {
    return {
      setView: jest.fn(),
    };
  },
  icon() {
    jest.fn();
  },
  tileLayer() {
    return {
      addTo: jest.fn(),
    };
  },
  marker() {
    return {
      addTo: jest.fn(),
    };
  },
};

export {testOffers, testLeaflet};
