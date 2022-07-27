import { render, screen } from '../../../test/setup';
import HomePage from './HomePage';

describe('Home page', () => {
  describe('layout', () => {
    it('has title', () => {
      render(<HomePage />);
      const title = screen.getByText('Gestion Clinica');
      expect(title).toBeInTheDocument();
    });
  });
});
