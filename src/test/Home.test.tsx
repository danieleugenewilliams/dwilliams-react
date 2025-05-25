import { render } from '@testing-library/react'
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
  it('renders the home page', () => {
    renderWithProviders(<Home />)
    
    // Check if key elements are present
    expect(document.title).toContain('D. E. Williams & Company')
  })
})
