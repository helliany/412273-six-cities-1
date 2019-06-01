import camelCase from 'camelcase-keys';

const initialState = {
  city: {},
  offers: [],
};

const getActiveCity = (offers, city) =>
  offers.filter((offer) => offer.city.name === city)[0].city;

const actionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),
  loadData: (offers) => ({
    type: `LOAD_DATA`,
    payload: offers,
  }),
};

const Operation = {
  loadData: () => (dispatch, _getState, api) =>
    api.get(`/hotels`).then((response) => {
      const data = camelCase(response.data);
      dispatch(actionCreator.loadData(data));
    })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return {...state,
      city: getActiveCity(state.offers, action.payload)
    };

    case `LOAD_DATA`: return {...state,
      city: action.payload[0].city,
      offers: action.payload,
    };
  }

  return state;
};

export {
  actionCreator,
  reducer,
  Operation,
};
