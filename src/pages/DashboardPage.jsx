// src/pages/DashboardPage.js
import React from 'react';
import DashboardContent from '../components/DashboardContent';

function DashboardPage() {
  return (
    <div className="flex bg-gray-100 flex-col space-y-4">
      <DashboardContent />
      {/* <div className="flex space-x-6">
        <UserProfile />
        <Notifications />
      </div> */}
    </div>
  );
}

export default DashboardPage;
