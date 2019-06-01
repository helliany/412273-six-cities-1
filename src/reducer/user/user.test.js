import {actionCreator} from './user';

it(`Action creator for check authorization correctly works`, () => {
  expect(actionCreator.requireAuthorization(true)).toEqual({
    type: `CHECK_AUTHORIZATION`,
    payload: true,
  });
});
