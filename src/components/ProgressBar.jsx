function ProgressBar({ label, percentage, color }) {
    return (
      <div className="mb-6">
        <div className="flex justify-between">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-sm font-medium">{percentage}%</span>
        </div>
        <div className="bg-gray-300 rounded-full h-2">
          <div className={`h-2 rounded-full ${color}`} style={{ width: `${percentage}%` }} />
        </div>
      </div>
    );
}

export default ProgressBar;
