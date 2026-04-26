import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Contact from './Contact';

describe('Contact', () => {
  it('renders and enables submit after message input', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    const nameInput = screen.getByLabelText(/Your Name/) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Your Email/) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/Message/) as HTMLTextAreaElement;
    const submit = screen.getByRole('button', { name: 'Send' }) as HTMLButtonElement;

    expect(submit.disabled).toBe(true);

    fireEvent.change(nameInput, { target: { value: 'Kudoa' } });
    fireEvent.change(emailInput, { target: { value: 'kudoa@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello' } });

    expect(nameInput.value).toBe('Kudoa');
    expect(emailInput.value).toBe('kudoa@example.com');
    expect(messageInput.value).toBe('Hello');
    expect(submit.disabled).toBe(false);

    consoleSpy.mockRestore();
  });
});
