import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  })
  
  it('renders "Hello World"', () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  })
})
