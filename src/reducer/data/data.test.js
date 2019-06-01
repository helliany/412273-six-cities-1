import MockAdapter from "axios-mock-adapter";

import {actionCreator} from './data';
import createAPI from "../../api";
import {Operation} from "./data";

it(`Action creator for changing city returns correct city`, () => {
  expect(actionCreator.changeCity(`Paris`)).toEqual({
    type: `CHANGE_CITY`,
    payload: `Paris`
  });
});

it(`Should make a correct API call to /hotels`, function () {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const questionLoader = Operation.loadData();

  apiMock
    .onGet(`/hotels`)
    .reply(200, [{fake: true}]);

  return questionLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `LOAD_DATA`,
        payload: [{fake: true}],
      });
    });
});
