import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock environment variables for tests
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_GA_ID: 'G-TEST123',
    VITE_HOTJAR_ID: '123456',
    VITE_HUBSPOT_PORTAL_ID: 'test-portal',
    VITE_HUBSPOT_CONTACT_FORM_ID: 'test-form',
    VITE_HUBSPOT_CASESTUDY_FORM_ID: 'test-case-form',
  },
  writable: true,
})

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
