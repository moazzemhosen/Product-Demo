import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="mb-8 text-3xl font-bold">Home Page</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/dataCollection" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
           Data Collection
          </Link>
          <Link to="/reportDashboard" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
          Report & Dashboard
          </Link>
          <Link to="/userManagement" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
           User Management
          </Link>
          <Link to="/otherSection" className="p-4 bg-white shadow rounded-lg text-center hover:bg-gray-200">
            Other Sction
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
