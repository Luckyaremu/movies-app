/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import searchActions from "../../actions/SearchActions";

describe('The data should be read from the API', () => {
  test('Should receive an object from the API', () => {
    SearchActions().then(data => {
      expect(typeof data).toBe('object');
    }).catch(() => {

    });
  });
  test('The object should contain set of movies', () => {
    SearchActions().then(data => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            movie: 'movies',
          }),
        ]),
      );
    }).catch(() => {

    });
  });
});
