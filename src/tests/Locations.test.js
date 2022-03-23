import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

it('Adicione uma rota para exibir uma lista de localizações', () => {
  renderWithRouter(<App />);
  const linkLocations = screen.getByText('Locations');
  expect(linkLocations).toBeInTheDocument();
});

it('Ao clicar no link, a página com a lista de localizações deve ser exibida', () => {
  const { history } = renderWithRouter(<App />);
  const linkLocations = screen.getByRole('link', { name: 'Locations' });
  userEvent.click(linkLocations);
  const { pathname } = history.location;
  expect(pathname).toBe('/locations');
});
