// src/pages/doctors.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const DoctorsPage: React.FC = () => {
  // Example data; replace with your actual data or API calls
  const doctors = [
    { id: 1, name: 'Dr. Alice', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Bob', specialty: 'Neurology' },
    // Add more doctors as needed
  ];

  return (
    <Layout>
      <h1>Doctors Added This Month</h1>
      <table className="doctors-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .doctors-table {
          width: 100%;
          border-collapse: collapse;
        }
        .doctors-table th, .doctors-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .doctors-table th {
          background-color: #f4f4f4;
        }
      `}</style>
    </Layout>
  );
};

export default DoctorsPage;
