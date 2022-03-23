import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokemon from '../components/Pokemon';
import renderWithRouter from '../helpers/renderWithRouter';
import pokemons from '../data';

describe('Teste o componente <Pokemon.js />', () => {
  it('O nome correto do Pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName.textContent).toBe(pokemons[0].name);
  });

  it('O tipo correto do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.textContent).toBe(pokemons[0].type);
  });

  it('O peso médio do pokémon deve ser exibido com um texto no formato...', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const { value, measurementUnit } = pokemons[0].averageWeight;
    const weightString = `Average weight: ${value} ${measurementUnit}`;
    expect(pokemonWeight.textContent).toBe(weightString);
  });

  it('A imagem do Pokémon deve ser exibida. ', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);

    const { name, image } = pokemons[0];
    const pokemonImage = screen.getByAltText(`${name} sprite`);
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', image);
    expect(pokemonImage).toHaveAttribute('alt', `${name} sprite`);
  });
});
