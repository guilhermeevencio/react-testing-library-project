import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
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

  it('A seção de detalhes deve conter um heading com o texto Summary e um <p>.', () => {
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

    const { summary } = pokemons[0];
    const pokemonAbstract = screen.getByText(summary);
    expect(pokemonAbstract).toBeInTheDocument();
  });

  it('O usuário pode favoritar um pokémon através da página de detalhes.', () => {
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
    const checkbox = screen.getByLabelText('Pokémon favoritado?');
    expect(checkbox).toBeInTheDocument();
  });

  it('Game Location', () => {
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
    const { name } = pokemons[0];
    const headingLocation = screen.getByRole('heading',
      { name: `Game Locations of ${name}` });
    expect(headingLocation).toBeInTheDocument();
  });

  it('Locations', () => {
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
    // Duvida... Porque não funcionou o codigo abaixo com queryAllByText(linha 106)
    const { foundAt } = pokemons[0];
    const imgLocation = screen.getAllByAltText(`${pokemons[0].name} location`);
    expect(imgLocation).not.toBe(null);

    const altsImg = imgLocation.map(({ alt }) => alt);
    altsImg.forEach((alt) => {
      const { name } = pokemons[0];
      expect(alt).toBe(`${name} location`);
    });

    imgLocation.forEach(({ src }) => {
      foundAt.forEach(({ location }) => {
        const locationParagraph = screen.getByText(location);
        expect(locationParagraph).toBeInTheDocument();
      });
      const maps = foundAt.map(({ map }) => map);
      expect(maps).toContain(src);
    });
  });

  it('Teste Do heading Pokemon details', () => {
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

    const pokemonDetails = screen.getByRole('heading',
      { level: 2, name: `${pokemons[0].name} Details` });
    expect(pokemonDetails).toBeInTheDocument();
  });
});
