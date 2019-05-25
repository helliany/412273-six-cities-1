import offers from './mocks/offers';

const firstCity = offers[0].city;
const selectedOffers = offers.filter((offer) => offer.city === firstCity);

const initialState = {
  city: firstCity,
  offers,
  selectedOffers,
};

const actionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),
  getOffers: () => ({
    type: `GET_OFFERS`,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return {...state,
      city: action.payload
    };

    case `GET_OFFERS`: return {...state,
      selectedOffers: offers.filter((offer) => offer.city === state.city),
    };
  }

  return state;
};

export {
  actionCreator,
  reducer,
};
