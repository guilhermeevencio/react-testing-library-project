import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/not-find-this-route');

    const notFoundText = screen.getByText('Page requested not found');
    expect(notFoundText).toBeInTheDocument();
  });

  it('Teste se página mostra a imagem correta.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/not-found-page');

    const image = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
