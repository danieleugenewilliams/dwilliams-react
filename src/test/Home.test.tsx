import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { describe, it, expect } from 'vitest'
import Home from '../components/Home'

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </HelmetProvider>
  )
}

describe('Home Component', () => {
  it('renders the home page', async () => {
    renderWithProviders(<Home />)

    // Hero headline (h1)
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { level: 1, name: /point it at what\s*matters/i })
      ).toBeInTheDocument()
    })

    // Thesis manifesto is present
    expect(
      screen.getByText(/We automate tasks that enhance human/i)
    ).toBeInTheDocument()

    // Proof section header is present
    expect(screen.getByText(/I run my life on it/i)).toBeInTheDocument()
  })
})
