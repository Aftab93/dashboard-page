import React from 'react';
import { PiUsersThreeLight } from 'react-icons/pi';
import { MdOutlineAccountBalance } from 'react-icons/md';
import StatCard from './StatCard';
import ProgressBar from './ProgressBar';

function DashboardContent() {
  return (
    <div className="flex-1 text-gray-600">
      <h2 className="text-2xl p-4 font-semibold">Dashboard</h2>

      <div className="flex gap-4 mb-6">
        
        <div className="flex-[0.7] ms-4 flex flex-col gap-4">
          <div className=" bg-white p-4 rounded-lg shadow-md">
            <StatCard
              icon={PiUsersThreeLight}
              title="Total Students"
              value="1,290"
              bgColor="bg-orange-200"
              arrowColor="text-orange-200"
            />

            <h3 className="text-lg font-semibold mb-2 py-1 ps-2 m-3 bg-gray-100">Statuses</h3>
            <div className="flex gap-2">
              {['Suspended', 'Struck Off', 'Pending'].map((status, index) => (
                <React.Fragment key={index}>
                  <div className="flex-1 bg-white p-4 text-center">
                    <h4 className="font-semibold">{status}</h4>
                    <p className="text-sm">0 Students</p>
                  </div>
                  
                  {index < 2 && <div className="w-px bg-gray-300 h-full" />}
                </React.Fragment>
              ))}
            </div>


            <h3 className="text-lg font-semibold mb-2 py-1 ps-2 m-3 bg-gray-100">Attendance</h3>
            <div className="flex gap-2">
              {['Suspended', 'Struck Off', 'Pending'].map((status, index) => (
                <React.Fragment key={index}>
                  <div className="flex-1 bg-white p-4 text-center">
                    <h4 className="font-semibold">{status}</h4>
                    <p className="text-sm">0 Students</p>
                  </div>
                  
                  {index < 2 && <div className="w-px bg-gray-300 h-full" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex w-full gap-4 pt-2">
            
            <div className="w-1/2 shadow-md bg-white px-4 py-2 rounded-lg">
              <StatCard
                icon={MdOutlineAccountBalance}
                title="Total Accounts"
                value="1,290"
                bgColor="bg-blue-300"
                arrowColor='text-blue-300'
                progressBars={[
                  { label: 'Received Amount', percentage: 75, color: 'bg-green-500' },
                  { label: 'Pending Amount', percentage: 25, color: 'bg-yellow-500' },
                ]}
              />
            </div>

            
            <div className="w-1/2 px-4 flex flex-col gap-3">
              <StatCard
                icon={PiUsersThreeLight}
                title="Total Teachers"
                value="30"
                bgColor="bg-green-200"
                arrowColor='text-green-200'
              />

              <StatCard
                icon={PiUsersThreeLight}
                title="Upcoming Events"
                value="30"
                bgColor="bg-red-400"
                arrowColor='text-red-400'
              />
            </div>
          </div>

        </div>

        
        <div className="flex-[0.3] rounded-lg shadow bg-white p-4 me-4">
          <StatCard
            icon={PiUsersThreeLight}
            title="Exams Total Percentage"
            value="80%"
            bgColor="bg-orange-200"
            arrowColor='text-orange-200'
          />

          {[{ grade: '10th', percent: 80 }, { grade: '9th', percent: 80 }, { grade: '8th', percent: 80 },
           { grade: '7th', percent: 40 }, { grade: '6th', percent: 70 }, { grade: '5th', percent: 50 },
           { grade: '4th', percent: 60 }, { grade: '3rd', percent: 30 }, { grade: '2nd', percent: 10 },
           { grade: '1st', percent: 20 }]
            .map((item, index) => (
              <ProgressBar
                key={index}
                label={item.grade}
                percentage={item.percent}
                color={item.percent > 75 ? 'bg-green-500' : item.percent >= 40 ? 'bg-yellow-500' : 'bg-red-500'}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
