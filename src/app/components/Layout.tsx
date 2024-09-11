// src/components/Layout.tsx
import '../../styles/globals.css';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header>
        {/* Header content with search bar, profile, notifications, and help button */}
      </header>
      <aside>
        {/* Sidebar content */}
      </aside>
      <main>
        {children}
      </main>
      <footer>
        {/* Footer content if any */}
      </footer>
    </div>
  );
};

export default Layout;
