// Global layout component that wraps all pages
// Will include:
// - Navbar component at the top
// - Main content area (children)
// - Footer component at the bottom
// - Consistent spacing and structure across all pages

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Navbar */}
      <main>
        {children}
      </main>
      {/* Footer */}
    </div>
  );
}
