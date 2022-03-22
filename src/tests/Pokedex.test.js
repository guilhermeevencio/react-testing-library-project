import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('Os próximos Pokémons da lista devem ser mostrados', () => {
    renderWithRouter(
      <Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />,
    );
    const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });
    const pokemonName = screen.getByTestId('pokemon-name').textContent;
    // console.log(pokemonName.textContent);
    const nextPokemon = (pokemon) => {
      let index = 0;
      pokemons.forEach((pok, i) => {
        if (pokemon === pok.name && i < pokemons.length) {
          index = (i + 1);
        }
        if (index === pokemons.length) {
          index = 0;
        }
      });
      return index;
    };
    nextPokemon(pokemonName);
    userEvent.click(nextPokemonButton);
    const nextPokemonName = screen.getByTestId('pokemon-name').textContent;
    expect(nextPokemonName).toBe(pokemons[nextPokemon(pokemonName)].name);
  });

  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(
      <Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />,
    );
    const pokeImage = screen.getAllByRole('img');
    expect(pokeImage).toHaveLength(1);
  });
});

describe('Teste se a Pokédex tem os botões de filtro.', () => {
  it('Deve existir um botão de filtragem para cada tipo de Pokémon.', () => {
    renderWithRouter(
      <Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />,
    );

    const types = pokemons.reduce((acc, { type }) => ([...acc, type]), ['All']);
    types.forEach((type) => {
      const typeButton = screen.getByRole('button', { name: type });
      expect(typeButton).toBeInTheDocument();
    });
  });
});
