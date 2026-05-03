import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

const hotkeyMock = vi.hoisted(() => ({
  callback: undefined as
    | ((event: { preventDefault: () => void }, handler: unknown) => void)
    | undefined,
}));

vi.mock('../utils/hotkeys', () => ({
  hotkeyHandler: vi.fn(
    (
      _command: string,
      callback: (event: { preventDefault: () => void }, handler: unknown) => void,
    ) => {
      hotkeyMock.callback = callback;
    },
  ),
}));

describe('Home', () => {
  it('toggles between edit and preview modes', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Home isPreview={false} onClick={() => {}} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Create Your Table')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Add column after 1' })).toBeTruthy();

    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('button', { name: 'Copy to Clipboard' })).toBeTruthy();

    const preventDefault = vi.fn();
    act(() => {
      hotkeyMock.callback?.({ preventDefault }, {});
    });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Add column after 1' })).toBeTruthy();

    consoleSpy.mockRestore();
  });
});
