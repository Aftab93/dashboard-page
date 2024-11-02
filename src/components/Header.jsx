import { FaBell, FaCog } from "react-icons/fa";
import { format } from 'date-fns'; 
export default function Header() {
  const lastLoginTime = new Date();
  const formattedTime = format(lastLoginTime, 'hh:mm a, MMM d, yyyy'); 

  return (
    <nav className="flex justify-between items-center bg-white p-4">
      <div className="text-sm font-semibold text-gray-500">
        School Management System
      </div>
      <div className="flex items-center">
        <span className="text-sm text-gray-600 mr-4">
          Last Login: {formattedTime}
        </span>
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <FaBell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <FaCog size={20} />
          </button>
          <div className="w-px h-6 bg-gray-300 mx-4" />
        </div>
      </div>
    </nav>
  );
}
