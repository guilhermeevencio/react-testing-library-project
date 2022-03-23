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

  it('Teste se o card do Pokémon na Pokédex contém um link de navegação.', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite={ false } />);
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    expect(detailsLink).toBeInTheDocument();
    const { id } = pokemons[0];
    expect(detailsLink).toHaveAttribute('href', `/pokemons/${id}`);
  });

  it('Ao clicar no link de navegação do Pokémon, é feito o redirecionamento...', () => {
    const { history } = renderWithRouter(
      <Pokemon
        pokemon={ pokemons[0] }
        isFavorite
      />,
    );
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    const { id } = pokemons[0];
    const path = `/pokemons/${id}`;
    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe(path);
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(
      <Pokemon
        pokemon={ pokemons[0] }
        isFavorite
      />,
    );
    const { name } = pokemons[0];

    const favIcon = screen.getByAltText(`${name} is marked as favorite`);
    expect(favIcon).toBeInTheDocument();
    expect(favIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
