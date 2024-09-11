// src/app/pages/index.tsx

import React from 'react';
import Link from 'next/link'; // Import Link component
import Layout from './components/Layout'; // Path to components

export const metadata = {
  title: "Healthcare Site",
  description: "My description",
}
const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to My Telemedicine Website</h1>
      <nav>
        <ul>
          <li>
            <Link href="/pages/doctors/">Doctors</Link> {/* Link to the Doctors page */}
          </li>
          <li>
            <Link href="/pages/revenue">Revenue</Link> {/* Link to the Revenue page */}
          </li>
          <li>
            <Link href="/pages/index">Index</Link> {/* Link to the Revenue page */}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default HomePage;
