
import '@testing-library/jest-dom'
import user from "@testing-library/user-event"
import { render, screen, act } from "../test-utils";
import Layout from '../components/Layout'

jest.mock('../api/useShortener', () => ({
  useShortener: jest.fn(() => ({
    onSubmit: jest.fn(() => Promise.resolve('short')),
    initialUrl: jest.fn(() => Promise.resolve({ shortUrl: 'short', originalUrl: 'long' })),
  })),
}));

describe('Layout component', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
        readText: jest.fn().mockImplementation(() => Promise.resolve('short')),
    }
    });
  });
  
  test('renders without crashing', async () => {
    await act(async () => {
      render(<Layout />);
    });
    expect(screen.getByText('URL Shortener')).toBeInTheDocument();
    expect(screen.getByText('Enter your long URL below to generate a shortened URL')).toBeInTheDocument();
    expect(screen.getByText('Your shortened URL:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your long URL')).toBeInTheDocument();
    expect(screen.getByText('Shorten')).toBeInTheDocument();
  });

  test('shortens and copies URL to clipboard', async () => {
    await act(async () => {
      render(<Layout />);
    });

    // Input long URL
    await act(async () => {
      user.type(screen.getByPlaceholderText('Enter your long URL'), 'https://example.com');
    });

    // Click the "Shorten" button
    await act(async () => {
      user.click(screen.getByText('Shorten'));
    });

    // Check that the shortened URL is displayed
    expect(await screen.findByText('Your shortened URL:')).toBeInTheDocument();

    // Check that the shortened URL is a link
    expect(screen.getByRole('link')).toHaveAttribute('href', 'short');

    // Click the "Copy to clipboard" button
    await act(async () => {
      user.click(screen.getByText('Copy to clipboard'));
    });

    // Check that the shortened URL is copied to the clipboard
    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe('short');

  });
});

