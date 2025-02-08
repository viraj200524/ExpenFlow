import React from 'react';

const TeamLeadsSupervisorsPolicies = () => {
  return (
    <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-6 lg:ml-4 mt-4 lg:mt-0">
      <h2 className="font-bold text-xl mb-4">Team Leads & Supervisors</h2>
      <div className="mb-4">
        <h3 className="font-bold">Travel Expenses</h3>
        <ul className="list-disc pl-5">
          <li>Business Trips: ₹40,000 - ₹2,40,000 per trip</li>
          <li>Local Transportation: ₹8,000 - ₹40,000 per month</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Meals and Entertainment</h3>
        <ul className="list-disc pl-5">
          <li>Client Meetings: Up to ₹80,000 per event</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamLeadsSupervisorsPolicies;