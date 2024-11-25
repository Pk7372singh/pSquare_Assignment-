import React from 'react';
import { Calendar, FileText } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    'Pending': 'bg-yellow-100 text-yellow-600',
    'Approved': 'bg-green-100 text-green-600',
    'Rejected': 'bg-red-100 text-red-600'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

const LeavePage = () => {
  const appliedLeaves = [
    {
      name: 'Esther Howard',
      role: 'Designer',
      date: '10/09/24',
      reason: 'Going to Home town',
      status: 'Pending',
      hasDoc: false
    },
    {
      name: 'Wade Warren',
      role: 'Senior Software Developer',
      date: ['10/09/24', '13/09/24'],
      reason: 'Had fever Dr. told to rest for 3 days',
      status: 'Approved',
      hasDoc: true
    },
    {
      name: 'Jenny Wilson',
      role: 'Developer',
      date: '11/09/24',
      reason: 'Not feeling Well',
      status: 'Rejected',
      hasDoc: false
    }
  ];

  const calendarLeaves = [
    {
      name: 'Wade Warren',
      role: 'Senior Software Developer',
      dates: ['10/09/24', '13/09/24']
    }
  ];

  return (
    <div className="p-6 flex gap-6">
      {/* Applied Leaves Section */}
      <div className="flex-1">
        <div className="bg-purple-700 rounded-t-lg">
          <div className="px-6 py-4">
            <h2 className="text-white font-medium">Applied Leaves</h2>
            <div className="grid grid-cols-5 gap-4 text-white/80 text-sm mt-4">
              <div>Name</div>
              <div>Date</div>
              <div>Reason</div>
              <div>Status</div>
              <div>Docs</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-b-lg shadow-sm divide-y">
          {appliedLeaves.map((leave, index) => (
            <div key={index} className="px-6 py-4">
              <div className="grid grid-cols-5 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="/api/placeholder/40/40" 
                      alt={leave.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{leave.name}</div>
                    <div className="text-sm text-gray-500">{leave.role}</div>
                  </div>
                </div>
                <div className="text-gray-600">
                  {Array.isArray(leave.date) 
                    ? `${leave.date[0]} - ${leave.date[1]}`
                    : leave.date
                  }
                </div>
                <div className="text-gray-600">{leave.reason}</div>
                <div>
                  <StatusBadge status={leave.status} />
                </div>
                <div>
                  {leave.hasDoc && (
                    <FileText className="h-5 w-5 text-purple-600" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="w-80">
        <div className="bg-purple-700 rounded-t-lg">
          <div className="px-6 py-4">
            <h2 className="text-white font-medium">Leave Calendar</h2>
          </div>
        </div>
        <div className="bg-white rounded-b-lg shadow-sm">
          <div className="p-4">
            <div className="flex gap-2 mb-4">
              <button className="px-4 py-2 rounded-full bg-white border text-sm hover:bg-gray-50">
                Today
              </button>
              <button className="px-4 py-2 rounded-full bg-purple-700 text-white text-sm flex items-center gap-2">
                10/09/24
                <Calendar className="h-4 w-4" />
              </button>
            </div>
            
           
            {calendarLeaves.map((entry, index) => (
              <div key={index} className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt={entry.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{entry.name}</div>
                  <div className="text-sm text-gray-500">{entry.role}</div>
                </div>
                <div className="ml-auto text-sm text-gray-600">
                  <div>{entry.dates[0]}</div>
                  <div>{entry.dates[1]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePage;