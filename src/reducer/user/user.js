const initialState = {
  user: {},
  isAuthorizationRequired: true,
};

const actionCreator = {
  requireAuthorization: (status) => ({
    type: `CHECK_AUTHORIZATION`,
    payload: status,
  }),
  signIn: (data) => ({
    type: `SIGN_IN`,
    payload: data,
  }),
  signOut: () => ({
    type: `SIGN_OUT`,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHECK_AUTHORIZATION`: return {...state,
      isAuthorizationRequired: action.payload
    };

    case `SIGN_IN`: return {...state,
      user: action.payload,
      isAuthorizationRequired: false,
    };

    case `SIGN_OUT`: return {...state,
      user: {},
      isAuthorizationRequired: true,
    };
  }

  return state;
};

export {
  actionCreator,
  reducer,
};
