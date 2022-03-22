import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testes do componente <About.js />.', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const pokeInfo = screen.getByText(/a digital encyclopedia containing all pokémons/i);
    expect(pokeInfo).toBeInTheDocument();
  });

  it('Teste se a página contém as informações sobre a Pokédex(2 paragrafo).', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const pokeInfo2 = screen.getByText(/one can filter pokémons by type/i);
    expect(pokeInfo2).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const headingText = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(headingText).toBeInTheDocument();
  });

  it('Teste se a url da imagem da pokedex está correta', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    userEvent.click(aboutLink);
    const image = screen.getByAltText('Pokédex');
    expect(image).toHaveAttribute('src', url);
  });
});
