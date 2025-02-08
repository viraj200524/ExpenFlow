import React from 'react';

const ExecutiveLevelPolicies = () => {
  return (
    <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-6 lg:ml-4 mt-4 lg:mt-0">
      <h2 className="font-bold text-xl mb-4">Executive Level (CEO, CTO, CFO, COO, CMO)</h2>
      <div className="mb-4">
        <h3 className="font-bold">Travel Expenses</h3>
        <ul className="list-disc pl-5">
          <li>Business Trips: ₹4,00,000 - ₹16,00,000 per trip</li>
          <li>Local Transportation: ₹40,000 - ₹1,60,000 per month</li>
          <li>Mileage Reimbursement: ₹54 per km</li>
          <li>Parking Fees & Tolls: Fully covered</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Accommodation</h3>
        <ul className="list-disc pl-5">
          <li>Hotel Stays: ₹25,000 - ₹1,25,000 per night</li>
          <li>Short-Term Rentals: ₹4,00,000 - ₹12,00,000 per month</li>
          <li>Meals During Travel: ₹8,000 - ₹40,000 per day</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Office Supplies and Equipment</h3>
        <ul className="list-disc pl-5">
          <li>Work Tools: Unlimited (as per requirement)</li>
          <li>Home Office Setup: Up to ₹8,00,000</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Communication Expenses</h3>
        <ul className="list-disc pl-5">
          <li>Mobile/Internet Bills: Fully covered</li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="mb-4">
        <h3 className="font-bold">Meals and Entertainment</h3>
        <ul className="list-disc pl-5">
          <li>Client Meetings: Up to ₹4,00,000 per event</li>
          <li>Team Outings: Up to ₹1,60,000 per event</li>
          <li>Daily Meal Allowance: ₹8,000 - ₹24,000 per day</li>
        </ul>
      </div>
    </div>
  );
};

export default ExecutiveLevelPolicies;