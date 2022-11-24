import * as React from "react"
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders App Compnoent', () => {
    render(<App />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  })
});