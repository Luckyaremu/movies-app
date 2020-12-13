/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import searchReducer from "../../reducers/SearchReducer";

describe('searchAction reducer', () => {
  test('should return the initial state', () => {
    expect(MovieActions(undefined, {})).toEqual('All');
  });
});
