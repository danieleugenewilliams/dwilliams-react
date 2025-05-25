Update the Future/Postponed Tasks section in agent-work.md with the following checklist and begin addressing the first item:

- [ ] Fix theme switching animation
  - Investigate the cause of the missing animation when switching themes
  - Implement a smooth transition for theme switching
- [ ] Fix React Testing Library act() deprecation warning
  - Verify all act imports are from react package
  - Update @testing-library/react and react/react-dom if needed
- [ ] Implement print-optimized versions of pages/documents
- [ ] Increase rate limiter test coverage to 100%
  - Add development logging tests
  - Add error handling test paths 
  - Implement Redis integration tests
- [ ] Design and implement automated data retention/deletion system
  - Align with existing data retention policy requirements
  - Document deletion mechanisms
- [ ] Fix resource preload warning for hero.avif image
  - Review preload link tag implementation
  - Add appropriate 'as' attribute
  - Verify intentional preload timing
- [ ] Resolve Next.js hydration mismatch error
  - Investigate server/client HTML differences
  - Review hydration documentation
  - Implement recommended fixes

Let's proceed with addressing the first checklist item regarding the theme switching animation.