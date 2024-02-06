import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  test('renders Loader component', () => {
    render(<Loader open={true} />);
    expect(screen.queryByTestId('circular-progress')).toBeInTheDocument();
  });
});