import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from '../components/ThemeProvider'
import Home from '../components/Home'

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

describe('Home Component', () => {
  it('renders the home page', async () => {
    renderWithProviders(<Home />)
    
    // Wait for the component to render and check for content that exists
    await waitFor(() => {
      expect(screen.getByText(/D. E. Williams \+ Co./i)).toBeInTheDocument()
    })
    
    // Check for other content that should be present
    expect(screen.getByText(/Premium strategic advisory/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
  })
})
