import React, { useState } from 'react';
import Sidebar, { SidebarItem } from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import { RiDashboard3Line, RiLineChartLine } from 'react-icons/ri';
import { TbUsersGroup, TbUsers } from 'react-icons/tb';
import { FaClipboardCheck } from 'react-icons/fa';
import { PiExam, PiSpeakerHigh } from 'react-icons/pi';
import { GoQuestion } from 'react-icons/go';
import { IoBusOutline } from 'react-icons/io5';
import Header from './components/Header';
// import CustomCalendarTable from './components/CalenderApp';
// import DatesheetPage from './pages/DatesheetPage';

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarItem 
          icon={<RiDashboard3Line size={20} />}
          text="Dashboard"
          isActive={activeItem === "Dashboard"}
          onClick={() => setActiveItem("Dashboard")}
        />
        <SidebarItem 
          icon={<TbUsersGroup size={20} />}
          text="Admin"
          isActive={activeItem === "Admin"}
          onClick={() => setActiveItem("Admin")}
        />
        <SidebarItem 
          icon={<TbUsers size={20} />}
          text="Admissions"
          isActive={activeItem === "Admissions"}
          onClick={() => setActiveItem("Admissions")}
        />
        <SidebarItem 
          icon={<FaClipboardCheck size={20} />}
          text="Academics"
          isActive={activeItem === "Academics"}
          onClick={() => setActiveItem("Academics")}
        />
        
        {/* Dropdown for Exams Department */}
        <SidebarItem 
          icon={<PiExam size={20} />}
          text="Exams Department"
          isActive={activeItem === "Exams Department"}
          onClick={() => setActiveItem("Exams Department")}
          isDropdown={true}
          dropdownItems={['Results', 'Date Sheet', 'Grades']}
        />
        
        <SidebarItem 
          icon={<GoQuestion size={20} />}
          text="Accounts Office"
          isActive={activeItem === "Accounts Office"}
          onClick={() => setActiveItem("Accounts Office")}
        />
        <SidebarItem 
          icon={<PiSpeakerHigh size={20} />}
          text="Hostel Management"
          isActive={activeItem === "Hostel Management"}
          onClick={() => setActiveItem("Hostel Management")}
        />
        <SidebarItem 
          icon={<IoBusOutline size={20} />}
          text="Transport Management"
          isActive={activeItem === "Transport Management"}
          onClick={() => setActiveItem("Transport Management")}
        />
        <SidebarItem 
          icon={<RiLineChartLine size={20} />}
          text="Reports"
          isActive={activeItem === "Reports"}
          onClick={() => setActiveItem("Reports")}
        />
      </Sidebar>
      <div className="flex-1 flex flex-col">
        <Header />
        <DashboardPage />
        {/* <DatesheetPage /> */}
      </div>
    </div>
  );
}

export default App;
