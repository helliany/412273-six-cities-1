import {actionCreator} from './data';

it(`Action creator for changing city returns correct city`, () => {
  expect(actionCreator.changeCity(`Paris`)).toEqual({
    type: `CHANGE_CITY`,
    payload: `Paris`
  });
});
