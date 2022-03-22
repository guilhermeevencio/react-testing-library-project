import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import NotFound from '../components/NotFound';
import renderWithRouter from '../helpers/renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/not-find-this-route');

    const notFoundText = screen.getByText('Page requested not found');
    expect(notFoundText).toBeInTheDocument();
  });
});
