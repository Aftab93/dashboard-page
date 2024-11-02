import { FaBell, FaCog } from "react-icons/fa"; // Importing bell and settings icons
import { format } from 'date-fns'; // For formatting the last login time

export default function Header() {
  const lastLoginTime = new Date(); // For demonstration, you can replace this with the actual login time
  const formattedTime = format(lastLoginTime, 'hh:mm a, MMM d, yyyy'); // Format the date and time as needed

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
          <div className="w-px h-6 bg-gray-300 mx-4" /> {/* Vertical splitter */}
        </div>
      </div>
    </nav>
  );
}
