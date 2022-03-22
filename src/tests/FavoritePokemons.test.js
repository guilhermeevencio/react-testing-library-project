import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../helpers/renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Exibe No favorite pokemon found, se a pessoa não tiver pokémons favoritos.', () => {
    renderWithRouter(<App />);

    const favPokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favPokemonsLink);

    const noFavoriteMsg = screen.getByText('No favorite pokemon found');
    expect(noFavoriteMsg).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const favPokemons = [pokemons[0], pokemons[1]];
    const { history } = renderWithRouter(<FavoritePokemons pokemons={ favPokemons } />);
    history.push('/favorites');

    favPokemons.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
