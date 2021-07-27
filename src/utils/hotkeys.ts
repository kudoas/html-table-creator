import hotkeys, { HotkeysEvent } from 'hotkeys-js';

export const hotkeyHandler = (
  command: string,
  func: (keyboardEvent: KeyboardEvent, hotkeysEvent: HotkeysEvent) => void | boolean,
) => hotkeys(command, func);
