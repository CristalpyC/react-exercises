// Button.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render button correctly', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText('clic me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should handle click event', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock} />);
    const buttonElement = getByText('clic me');
    
    fireEvent.click(buttonElement);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
