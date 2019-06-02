const initialState = {
  user: {},
  isAuthorizationRequired: false,
};

const actionCreator = {
  requireAuthorization: (status) => ({
    type: `CHECK_AUTHORIZATION`,
    payload: status,
  }),
  signIn: (data) => ({
    type: `SIGN_IN`,
    payload: data,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHECK_AUTHORIZATION`: return {...state,
      isAuthorizationRequired: action.payload
    };

    case `SIGN_IN`: return {...state,
      user: action.payload,
    };
  }

  return state;
};

export {
  actionCreator,
  reducer,
};
