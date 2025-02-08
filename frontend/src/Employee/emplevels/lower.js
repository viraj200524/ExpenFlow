import React from 'react';

const LowerManagementPolicies = () => {
  return (
    <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-6 lg:ml-4 mt-4 lg:mt-0">
      <h2 className="font-bold text-xl mb-4">Lower Management (Managers)</h2>
      <div className="mb-4">
        <h3 className="font-bold">Travel Expenses</h3>
        <ul className="list-disc pl-5">
          <li>Business Trips: ₹80,000 - ₹4,00,000 per trip</li>
          <li>Local Transportation: ₹12,000 - ₹56,000 per month</li>
          <li>Mileage Reimbursement: ₹38 per km</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Office Supplies and Equipment</h3>
        <ul className="list-disc pl-5">
          <li>Work Tools: Up to ₹1,60,000 per year</li>
        </ul>
      </div>
    </div>
  );
};

export default LowerManagementPolicies;