import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function PageOne() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="mb-8 text-3xl font-bold"></h1>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/downloadtemplate" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
           Download Template
          </Link>
          <Link to="" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
          Upload Data
          </Link>
          <Link to="" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
           Dashboard Sanity check
          </Link>
          <Link to="" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
            Rules & Mapping Tables
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
