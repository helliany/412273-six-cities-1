import {actionCreator} from './user';

it(`Action creator for check authorization correctly works`, () => {
  expect(actionCreator.requireAuthorization(true)).toEqual({
    type: `CHECK_AUTHORIZATION`,
    payload: true,
  });
});

it(`Action creator for sign in correctly works`, () => {
  expect(actionCreator.signIn({email: `Oliver.conner@gmail.com`})).toEqual({
    type: `SIGN_IN`,
    payload: {email: `Oliver.conner@gmail.com`}
  });
});
