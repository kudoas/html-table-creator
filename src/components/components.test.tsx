import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Button from './Button';
import Footer from './Footer';
import Header from './Header';
import SwitchTableForm from './SwitchTableForm';
import Toggle from './Toggle';

describe('components', () => {
  it('renders and clicks a button', () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Save</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disables a button when isOne is true', () => {
    render(<Button isOne>Disabled</Button>);

    expect((screen.getByRole('button', { name: 'Disabled' }) as HTMLButtonElement).disabled).toBe(
      true,
    );
  });

  it('renders and toggles the switch', () => {
    const onClick = vi.fn();

    render(<Toggle checked={false} onClick={onClick} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(false);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the table mode switch', () => {
    const onClick = vi.fn();

    render(<SwitchTableForm isPreview={true} onClick={onClick} />);
    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByText('Edit')).toBeTruthy();
    expect(screen.getByText('Preview')).toBeTruthy();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders header navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'HTML Table Creator' }).getAttribute('href')).toBe('/');
  });

  it('renders footer links', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Contact/ }).getAttribute('href')).toBe('/contact');
    expect(screen.getByRole('link', { name: /GitHub/ }).getAttribute('href')).toBe(
      'https://github.com/Kudoas/html-table-creator',
    );
    expect(screen.getByRole('link', { name: /What is <table>\?/ }).getAttribute('href')).toBe(
      'https://developer.mozilla.org/ja/docs/Web/HTML/Element/table',
    );
    expect(screen.getByRole('link', { name: /kudoa/ }).getAttribute('href')).toBe(
      'https://twitter.com/kudoadd',
    );
    expect(consoleSpy).toHaveBeenCalledWith('footer');

    consoleSpy.mockRestore();
  });
});
