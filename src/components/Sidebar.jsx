// src/components/Sidebar.jsx
import React, { useContext, createContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/logo.png';
import { FaChevronDown } from "react-icons/fa";

export const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col bg-white border-r shadow-sm ${!expanded ? 'items-center' : ''}`}>
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            aria-label={expanded ? "Collapse menu" : "Expand menu"}
          >
            <RxHamburgerMenu size={20}/>
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

// SidebarItem Component
export function SidebarItem({ icon, text, isActive, onClick, isDropdown = false, dropdownItems = [] }) {
  const { expanded } = useContext(SidebarContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleItemClick = () => {
    if (isDropdown) {
      setDropdownOpen((prev) => !prev);
    }
    onClick();
  };

  return (
    <li
      onClick={handleItemClick}
      className={`
        relative flex flex-col ${isDropdown ? 'cursor-pointer' : ''}
        py-2 px-3 my-1 font-medium rounded-md transition-colors group
        ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
      `}
      aria-expanded={isDropdown ? dropdownOpen : undefined}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center h-8 w-8 mr-3">
          {React.cloneElement(icon, { className: "h-full w-full" })}
        </div>
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span>
        {isDropdown && (
          <FaChevronDown
            className={`ml-auto transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        )}
      </div>

      {/* Dropdown Items: Show even when collapsed */}
      {isDropdown && dropdownOpen && (
        <ul className="mt-2 ml-8 space-y-1">
          {dropdownItems.map((item, index) => (
            <li
              key={index}
              className="py-1 px-3 text-gray-600 hover:bg-indigo-50 rounded-md"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
