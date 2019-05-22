import offers from './mocks/offers';

const initialState = {
  city: `Amsterdam`,
  offers,
};

const actionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  })
};

const reducer = (state = initialState, action) => {
  if (action.type === `CHANGE_CITY`) {
    return {...state, city: action.payload};
  }

  return state;
};

export {
  actionCreator,
  reducer,
};
