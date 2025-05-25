To help you understand the context of this migration, here are some details about the old app:
# Migration Context
The old app is a Next.js application that was implemented in my local environment. We could build it successfully locally, but the build failed repeatedly on AWS and Vercel. It contains various pages such as Home, About, Services, Case Studies, Bio, Insights, and Contact. It also includes forms for contact, case study downloads, and newsletter subscriptions. The app uses Tailwind CSS for styling and has some static assets like images and PDFs.

I've placed the rendered html from the old app in /.old-app/html.

I also placed the tailwindcss and css styling in /.old-app/html/styles

I placed the content (download pdfs, images, privacy policy, etc) in /.old-app/html/public

The home page is the main entry point, and it links to all other pages. The app has a consistent layout across pages, with a header, footer, and main content area. I have included the home page and other pages in the /.old-app/html directory, along with their respective styles and assets. Additionally, I've included both the regular theming and dark mode theming in the styles directory (see home.html and home.dark.html)

The bio page had a tabbed interface with different sections for the bio, resume, and contact information. I've included the rendered HTML for the bio page tab sections in the /.old-app/html directory, along with the necessary styles and assets.
- bio-background.html
- bio-expertise.html
- bio-experience.html
- bio-education.html
- bio-publications.html

The insights navbar link links to Substack. The contact page had a form that integrated with HubSpot for lead generation. It does not require any special handling beyond linking to the external site.

The services.html page lists various services offered by the company. Each service has a brief description and a link to the contact page for more details.

The case studies page (/.old-app/html/case-studies.html) showcases different case studies with links to gated download PDFs. The PDF downloads require a HubSpot form submission to access the content.

The contact page (/.old-app/html/contact.html) includes a form that integrates with HubSpot for lead generation. The form captures user information and submits it to HubSpot.

[]: # - Use Tailwind CSS for all styling, with dark mode support
[]: # - Use TypeScript for all components and logic
[]: # - Ensure all assets are in `src/assets/` or `public/`
[]: # - Remove all Next.js-specific code, including SSR and API routes
[]: # - Update documentation to reflect new conventions and migration steps
[]: # - Ensure all pages are accessible and follow best practices and ui-guidelines.md
[]: # - Maintain a consistent design and user experience across all pages
[]: # - Use React Helmet for dynamic metadata management
[]: # - Ensure all forms are client-side only, with HubSpot integration handled via client-side JavaScript
[]: # - Implement lazy loading for large assets and PDFs to improve performance
[]: # - Maintain a consistent design and user experience across all pages
[]: # 
[]: # ---
[]: # 
[]: # ## 4. Migration Risks & Mitigation
[]: # - **Risk**: Loss of SEO benefits from SSR
[]: #   - **Mitigation**: Ensure all metadata is preserved in the new React components, use React Helmet for dynamic metadata.
[]: # - **Risk**: Potential issues with HubSpot form integration
[]: #   - **Mitigation**: Thoroughly test all forms and ensure they work as expected in the new SPA context.
[]: # - **Risk**: Performance issues with large assets or PDFs
[]: #   - **Mitigation**: Optimize images and assets, use lazy loading where appropriate.