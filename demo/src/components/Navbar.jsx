import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-4 py-2 bg-gray-300 text-gray-900">
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
          className=" px-3 bg-blue-300 font-semibold shadow rounded-lg text-center hover:bg-blue-400 border-1"
        >
          Home
        </Link>
        <Link
          to="/dataCollection"
          className=" px-3 bg-blue-300 font-semibold shadow rounded-lg text-center hover:bg-blue-400 border-1"
        >
          Data Collection
        </Link>
        <Link
          to="/reportDashboard"
          className=" px-3 bg-blue-300 font-semibold shadow rounded-lg text-center hover:bg-blue-400 border-1"
        >
          Report & Dashboard
        </Link>
        <Link
          to="/userManagement"
          className=" px-3 bg-blue-300 font-semibold shadow rounded-lg text-center hover:bg-blue-400 border-1"
        >
          User Management
        </Link>
        <Link
          to="/otherSection"
          className=" px-3 bg-blue-300 font-semibold shadow rounded-lg text-center hover:bg-blue-400 border-1"
        >
          Other Section
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
