const initialState = {
  isAuthorizationRequired: false,
};

const actionCreator = {
  requireAuthorization: (isAuthRequired) => ({
    type: `CHECK_AUTHORIZATION`,
    payload: isAuthRequired
  })
};

const reducer = (state = initialState, action) => {
  if (action.type === `CHECK_AUTHORIZATION`) {
    return {...state,
      isAuthorizationRequired: action.payload
    };
  }

  return state;
};

export {
  actionCreator,
  reducer,
};
