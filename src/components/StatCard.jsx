import { FiArrowRight } from 'react-icons/fi';
import ProgressBar from './ProgressBar';

function StatCard({ icon: Icon, title, value, bgColor, progressBars = [], arrowColor = 'text-gray-500' }) {
    return (
      <div className="mb-3 bg-white p-2 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-lg font-semibold">
            <Icon className={`mr-2 p-[1rem] ${bgColor} rounded-sm`} size={60} />
            <div>
              <span>{title}</span>
              <br />
              <span className="text-2xl font-bold">{value}</span>
            </div>
          </div>
          <div className={arrowColor}> {/* Apply arrow color here */}
            <FiArrowRight size={60} />
          </div>
        </div>
        {/* Render progress bars if provided */}
        {progressBars.length > 0 && (
          <div className="mt-5">
            {progressBars.map((bar, index) => (
              <ProgressBar key={index} label={bar.label} percentage={bar.percentage} color={bar.color} />
            ))}
          </div>
        )}
      </div>
    );
}

export default StatCard;