import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Pokedex from '../components/Pokedex';
import renderWithRouter from '../helpers/renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <Pokedex.js />', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    renderWithRouter(
      <Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />,
    );
    const headingPokedex = screen.getByRole(
      'heading', { level: 2, name: 'Encountered pokémons' },
    );
    expect(headingPokedex).toBeInTheDocument();
  });

  it('O botão deve conter o texto Próximo pokémon', () => {
    renderWithRouter(
      <Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />,
    );
    const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemonButton).toBeInTheDocument();
  });
});
