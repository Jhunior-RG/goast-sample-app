import { render, screen, fireEvent } from '@testing-library/react';
import DisplayUser from './DisplayUser';

describe('DisplayUser', () => {
  test('displays "No user selected" when username is an object with empty first and last properties', () => {
    render(<DisplayUser />);
    const button = screen.getByRole('button', { name: /clear name/i });
    fireEvent.click(button);
    expect(screen.getByText(/firstname: no user selected/i)).toBeInTheDocument();
    expect(screen.getByText(/lastname: no user selected/i)).toBeInTheDocument();
  });

  test('does not crash and displays "No user selected" when username state is null', () => {
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [null, () => {}]);

    render(<DisplayUser />);
    expect(screen.getByText(/firstname: no user selected/i)).toBeInTheDocument();
    expect(screen.getByText(/lastname: no user selected/i)).toBeInTheDocument();

    useStateSpy.mockRestore();
  });
});
