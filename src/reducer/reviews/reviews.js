import camelCase from 'camelcase-keys';
import createAPI from '../../api';

const initialState = {
  reviews: [
    {
      id: 1,
      user: {
        id: 4,
        isPro: false,
        name: ``,
        avatarUrl: ``,
      },
      rating: 4,
      comment: ``,
      date: ``,
    }
  ],
};

const Operation = {
  loadReviews: (id) => (dispatch, _getState) =>
    createAPI().get(`/comments/${id}`).then((response) => {
      const data = camelCase(response.data, {deep: true});
      dispatch(actionCreator.loadReviews(data));
    }).catch(() => {})
};

const actionCreator = {
  loadReviews: (reviews) => ({
    type: `LOAD_REVIEWS`,
    payload: reviews,
  }),
};

const reducer = (state = initialState, action) => {
  if (action.type === `LOAD_REVIEWS`) {
    return {...state,
      reviews: action.payload,
    };
  }

  return state;
};

export {
  actionCreator,
  reducer,
  Operation,
};
