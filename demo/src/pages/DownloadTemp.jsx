import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const DownloadTemp = () => {
    const fields = [
        "Country",
        "Entity",
        "Agency",
        "Stream",
        "Campaign type",
        "Start date",
        "End date",
        "Media type",
      ];
  return (
    <div>
        <Navbar />
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs space-y-4">
          {fields.map((label) => (
            <div key={label}>
              <label className="block text-sm text-gray-700 mb-1">{label}</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select {label.toLowerCase()}</option>
              </select>
            </div>
          ))}
          <Link to="/uploaddata">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Generate template
          </button>
          </Link>
          
        </div>
      </div>
      </div>
  )
}

export default DownloadTemp;

