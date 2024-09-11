// src/pages/revenue.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const revenueData = {
  labels: ['Product A', 'Product B', 'Product C'],
  datasets: [
    {
      data: [3000, 5000, 2000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverOffset: 4,
    },
  ],
};

const RevenuePage: React.FC = () => {
  return (
    <Layout>
      <header>
        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">
            <span>User Profile</span>
          </div>
        </div>
        <div className="top-buttons">
          <button>Notifications</button>
          <button>Help</button>
        </div>
      </header>
      <aside>
        <nav className="sidebar">
          <ul>
            <li><Link href="/">Consultation Insights</Link></li>
            <li><Link href="/doctors">Doctors</Link></li>
            <li><Link href="/revenue">Revenue</Link></li>
          </ul>
        </nav>
      </aside>
      <main>
        <h1>Revenue Data and Distribution</h1>
        <div className="revenue-data">
          <h2>Total Revenue</h2>
          <p>$10,000</p>
        </div>
        <div className="chart small-chart">
          <h2>Revenue Distribution</h2>
          <Pie data={revenueData} />
        </div>
      </main>
    </Layout>
  );
};

export default RevenuePage;
