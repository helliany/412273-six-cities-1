import camelCase from 'camelcase-keys';

const initialState = {
  city: {
    name: ``,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    }
  },
  offers: [
    {
      id: 1,
      city: {
        name: ``,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0,
        }
      },
      previewImage: ``,
      images: [],
      title: ``,
      isFavorite: false,
      isPremium: false,
      rating: 1,
      type: ``,
      price: 100,
      goods: [],
      host: {
        id: 1,
        isPro: true,
        name: ``,
        avatarUrl: ``
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      }
    }
  ],
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
