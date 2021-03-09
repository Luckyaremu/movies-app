/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import searchActions from "../../actions/SearchActions";


describe('The data should be read from the API', () => {
  test('Should receive an object from the API', () => {
    SearchMovie().then(data => {
      expect(typeof data).toBe('object');
    })
  test('The object should contain set of movies', () => {
    SearchMovie().then(data => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            movie: 'movies',
          }),
        ]),
      );
    })
  });
});
});
