import React from 'react';

export default function policies({ type, typePolicies }) {
  // Map the selected type to the full key in typePolicies.json
  const typeMapping = {
    'Executive Level': 'Executive Level (CEO, CTO, CFO, COO, CMO)',
    'Senior Management': 'Senior Management (VPs)',
    'Middle Management': 'Middle Management (Directors)',
    'Lower Management': 'Lower Management (Managers)',
    'Team Leads': 'Team Leads & Supervisors',
    'Staff': 'Staff & Employees'
  };

  const selectedType = type ? typeMapping[type] : null;
  const selectedPolicies = selectedType ? typePolicies[selectedType] : null;

  return (
    <div className="lg:w-3/5 bg-white rounded-lg shadow-md p-6 lg:ml-4 mt-4 lg:mt-0">
      <h2 className="font-bold text-xl mb-4">Policies</h2>
      {selectedPolicies ? (
        Object.entries(selectedPolicies).map(([category, details]) => (
          <div key={category} className="mb-4">
            <h3 className="font-bold">{category}</h3>
            <ul className="list-disc pl-5">
              {Object.entries(details).map(([policy, value]) => (
                <li key={policy}>{policy}: {value}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No policies available for the selected type.</p>
      )}
    </div>
  );
}