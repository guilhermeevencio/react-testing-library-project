import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Exibe No favorite pokemon found, se a pessoa não tiver pokémons favoritos.', () => {
    renderWithRouter(<App />);

    const favPokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favPokemonsLink);

    const noFavoriteMsg = screen.getByText('No favorite pokemon found');
    expect(noFavoriteMsg).toBeInTheDocument();
  });

  it('', () => {

  });
});
