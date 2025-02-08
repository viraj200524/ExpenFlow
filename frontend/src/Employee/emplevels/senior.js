import React from 'react';

const SeniorManagementPolicies = () => {
  return (
    <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-6 lg:ml-4 mt-4 lg:mt-0">
      <h2 className="font-bold text-xl mb-4">Senior Management (VPs)</h2>
      <div className="mb-4">
        <h3 className="font-bold">Travel Expenses</h3>
        <ul className="list-disc pl-5">
          <li>Business Trips: ₹2,40,000 - ₹8,00,000 per trip</li>
          <li>Local Transportation: ₹24,000 - ₹1,20,000 per month</li>
          <li>Mileage Reimbursement: ₹46 per km</li>
          <li>Parking Fees & Tolls: Up to ₹40,000 per month</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Accommodation</h3>
        <ul className="list-disc pl-5">
          <li>Hotel Stays: ₹16,000 - ₹80,000 per night</li>
          <li>Short-Term Rentals: ₹2,40,000 - ₹8,00,000 per month</li>
          <li>Meals During Travel: ₹6,000 - ₹24,000 per day</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Office Supplies and Equipment</h3>
        <ul className="list-disc pl-5">
          <li>Work Tools: Up to ₹4,00,000 per year</li>
          <li>Home Office Setup: Up to ₹4,00,000</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Meals and Entertainment</h3>
        <ul className="list-disc pl-5">
          <li>Client Meetings: Up to ₹2,40,000 per event</li>
          <li>Team Outings: Up to ₹1,20,000 per event</li>
        </ul>
      </div>
    </div>
  );
};

export default SeniorManagementPolicies;