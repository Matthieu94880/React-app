import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';
import { ThemeProvider } from '../utils/context/Theme';

it('Should change theme', async () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  );
  const nightModeButton = screen.getByRole('button');
  expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
  fireEvent.click(nightModeButton);
  expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
});
