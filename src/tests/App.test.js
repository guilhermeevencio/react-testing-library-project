import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('O topo da aplicação contém um conjunto fixo de links de navegação.', () => {
  it('O primeiro link deve possuir o texto Home.', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
  });
});
