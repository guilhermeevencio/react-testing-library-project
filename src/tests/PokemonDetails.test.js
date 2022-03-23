import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import PokemonDetails from '../components/PokemonDetails';
import pokemons from '../data';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('As informações detalhadas do Pokémon selecionado são mostradas na tela.', () => {
    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ {} }
        pokemons={ pokemons }
        match={ {
          params: { id: pokemons[0].id.toString() },
        } }
        onUpdateFavoritePokemons={ () => {} }
      />,

    );
    const pokeName = screen.getByTestId('pokemon-name');
    expect(pokeName).toBeInTheDocument();
  });

  it('Não deve existir o link de navegação para os detalhes do Pokémon.', () => {
    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ {} }
        pokemons={ pokemons }
        match={ {
          params: { id: pokemons[0].id.toString() },
        } }
        onUpdateFavoritePokemons={ () => {} }
      />,
    );

    const detailsLink = screen.queryByText('More details');
    expect(detailsLink).toBe(null);
  });

  it('A seção de detalhes deve conter um heading h2 com o texto Summary.', () => {
    renderWithRouter(
      <PokemonDetails
        isPokemonFavoriteById={ {} }
        pokemons={ pokemons }
        match={ {
          params: { id: pokemons[0].id.toString() },
        } }
        onUpdateFavoritePokemons={ () => {} }
      />,
    );

    const summaryHeading = screen.getByRole('heading', { level: 2, name: 'Summary' });
    expect(summaryHeading).toBeInTheDocument();
  });
});
