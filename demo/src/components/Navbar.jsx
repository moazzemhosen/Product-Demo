import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-blue-50 shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>
      
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          Home
        </Link>
        <Link
          to="/dataCollection"
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          Data Collection
        </Link>
        <Link
          to="/reportDashboard"
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          Report & Dashboard
        </Link>
        <Link
          to="/userManagement"
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          User Management
        </Link>
        <Link
          to="/otherSection"
          className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
        >
          Other Section
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
