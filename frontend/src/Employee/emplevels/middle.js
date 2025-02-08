import React from 'react';

const MiddleManagementPolicies = () => {
  return (
    <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-6 lg:ml-4 mt-4 lg:mt-0">
      <h2 className="font-bold text-xl mb-4">Middle Management (Directors)</h2>
      <div className="mb-4">
        <h3 className="font-bold">Travel Expenses</h3>
        <ul className="list-disc pl-5">
          <li>Business Trips: ₹1,60,000 - ₹5,60,000 per trip</li>
          <li>Local Transportation: ₹16,000 - ₹80,000 per month</li>
          <li>Mileage Reimbursement: ₹42 per km</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Office Supplies and Equipment</h3>
        <ul className="list-disc pl-5">
          <li>Work Tools: Up to ₹2,40,000 per year</li>
          <li>Home Office Setup: Up to ₹2,40,000</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Meals and Entertainment</h3>
        <ul className="list-disc pl-5">
          <li>Client Meetings: Up to ₹1,60,000 per event</li>
        </ul>
      </div>
    </div>
  );
};

export default MiddleManagementPolicies;