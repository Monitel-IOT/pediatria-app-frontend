import { render, screen } from '../../../test/setup';
import LoginPage from './LoginPage';

describe('Login page', () => {
  describe('layout', () => {
    it('has title', () => {
      render(<LoginPage />);
      const title = screen.getByText('Es genial verte!');
      expect(title).toBeInTheDocument();
    });
  });
});
