import { hotkeyHandler } from './hotkeys';

const hotkeysMock = vi.hoisted(() => vi.fn());

vi.mock('hotkeys-js', () => ({
  default: hotkeysMock,
}));

test('registers hotkey command and handler', () => {
  const handler = vi.fn();

  hotkeyHandler('command+e', handler);

  expect(hotkeysMock).toHaveBeenCalledWith('command+e', handler);
});
