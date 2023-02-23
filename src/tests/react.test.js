import React from 'react';
import renderer from 'react-test-renderer';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import Home from '../routes/Home';
import Quote from '../routes/Quote';
import Calculator from '../routes/Calculator';
import '@testing-library/jest-dom';

describe('calculate tests for different button inputs', () => {
  it('renders Home element correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quote element correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Calculator element correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Tests calculator display functionality', () => {
  it('renders Calculator and test if key pressed updates value of calculator display', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('1'));
    expect(screen.getByRole('dialog')).toHaveTextContent('1');
  });

  it('renders Calculator and test if number inputs are correcly displayed', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('1'));
    fireEvent.click(screen.getByRole('2'));
    fireEvent.click(screen.getByRole('3'));
    expect(screen.getByRole('dialog')).toHaveTextContent('123');
  });

  it('renders Calculator and test if key pressed updates value of calculator display', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('1'));
    fireEvent.click(screen.getByRole('+'));
    fireEvent.click(screen.getByRole('1'));
    fireEvent.click(screen.getByRole('='));
    expect(screen.getByRole('dialog')).toHaveTextContent('2');
  });
});
