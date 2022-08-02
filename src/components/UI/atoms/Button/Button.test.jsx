import { render, screen } from '../../../../test/setup';
import Button from './Button';

describe('Button component', () => {
  it('should render', () => {
    render(<Button>Click Me!</Button>);
  });
  it('render the text button', () => {
    render(<Button>Click Me!</Button>);
    const button = screen.queryByRole('button', { name: 'Click Me!' });
    expect(button).toBeInTheDocument();
  });
});
