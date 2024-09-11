// src/pages/index.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Income Accumulation',
      data: [300, 500, 200, 700, 600, 800, 1000],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.dataset.label}: $${context.raw}`,
      },
    },
  },
};

const HomePage: React.FC = () => {
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
        <h1>Consultation Insights</h1>
        <div className="overview">
          <p>Max Fee: $200</p>
          <p>Min Fee: $50</p>
          <p>Duration: 30 mins</p>
          <p>Total Patients: 150</p>
          <p>Total Consultations: 300</p>
          <p>Server Cost: $500</p>
          <p>Bandwidth: 1TB</p>
        </div>
        <div className="chart">
          <h2>Income Accumulation</h2>
          <Line data={data} options={options} />
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
