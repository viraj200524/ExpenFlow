import React, { useState, useRef } from 'react';
import axios from 'axios';
import { X, Upload, FileText } from 'lucide-react';

const ReceiptUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('Executive Level (CEO, CTO, CFO, COO, CMO)');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const policyData = {
    "Executive Level (CEO, CTO, CFO, COO, CMO)": {
      "Travel Expenses": {
        "Business Trips": "₹4,00,000 - ₹16,00,000 per trip",
        "Local Transportation": "₹40,000 - ₹1,60,000 per month",
        "Mileage Reimbursement": "₹54 per km",
        "Parking Fees & Tolls": "Fully covered"
      },
      "Accommodation": {
        "Hotel Stays": "₹25,000 - ₹1,25,000 per night",
        "Short-Term Rentals": "₹4,00,000 - ₹12,00,000 per month",
        "Meals During Travel": "₹8,000 - ₹40,000 per day"
      },
      "Office Supplies and Equipment": {
        "Work Tools": "Unlimited (as per requirement)",
        "Home Office Setup": "Up to ₹8,00,000"
      },
      "Communication Expenses": {
        "Mobile/Internet Bills": "Fully covered"
      },
      "Meals and Entertainment": {
        "Client Meetings": "Up to ₹4,00,000 per event",
        "Team Outings": "Up to ₹1,60,000 per event",
        "Daily Meal Allowance": "₹8,000 - ₹24,000 per day"
      }
    },
    "Senior Management (VPs)": {
      "Travel Expenses": {
        "Business Trips": "₹2,40,000 - ₹8,00,000 per trip",
        "Local Transportation": "₹24,000 - ₹1,20,000 per month",
        "Mileage Reimbursement": "₹46 per km",
        "Parking Fees & Tolls": "Up to ₹40,000 per month"
      },
      "Accommodation": {
        "Hotel Stays": "₹16,000 - ₹80,000 per night",
        "Short-Term Rentals": "₹2,40,000 - ₹8,00,000 per month",
        "Meals During Travel": "₹6,000 - ₹24,000 per day"
      },
      "Office Supplies and Equipment": {
        "Work Tools": "Up to ₹4,00,000 per year",
        "Home Office Setup": "Up to ₹4,00,000"
      },
      "Meals and Entertainment": {
        "Client Meetings": "Up to ₹2,40,000 per event",
        "Team Outings": "Up to ₹1,20,000 per event"
      }
    },
    "Middle Management (Directors)": {
      "Travel Expenses": {
        "Business Trips": "₹1,60,000 - ₹5,60,000 per trip",
        "Local Transportation": "₹16,000 - ₹80,000 per month",
        "Mileage Reimbursement": "₹42 per km"
      },
      "Office Supplies and Equipment": {
        "Work Tools": "Up to ₹2,40,000 per year",
        "Home Office Setup": "Up to ₹2,40,000"
      },
      "Meals and Entertainment": {
        "Client Meetings": "Up to ₹1,60,000 per event"
      }
    },
    "Lower Management (Managers)": {
      "Travel Expenses": {
        "Business Trips": "₹80,000 - ₹4,00,000 per trip",
        "Local Transportation": "₹12,000 - ₹56,000 per month",
        "Mileage Reimbursement": "₹38 per km"
      },
      "Office Supplies and Equipment": {
        "Work Tools": "Up to ₹1,60,000 per year"
      }
    },
    "Team Leads & Supervisors": {
      "Travel Expenses": {
        "Business Trips": "₹40,000 - ₹2,40,000 per trip",
        "Local Transportation": "₹8,000 - ₹40,000 per month"
      },
      "Meals and Entertainment": {
        "Client Meetings": "Up to ₹80,000 per event"
      }
    },
    "Staff & Employees": {
      "Travel Expenses": {
        "Business Trips": "₹24,000 - ₹1,60,000 per trip",
        "Local Transportation": "Up to ₹24,000 per month"
      },
      "Office Supplies and Equipment": {
        "Work Tools": "Up to ₹80,000 per year"
      }
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('file', file);
    });

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
      setSelectedFiles([]);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  const renderFilePreview = (file, index) => {
    const isImage = file.type.startsWith('image/');
    const isPDF = file.type === 'application/pdf';

    return (
      <div key={index} className="relative flex items-center p-3 mb-2 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex-1 flex items-center">
          {isImage ? (
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-12 h-12 object-cover rounded"
            />
          ) : (
            <FileText className="w-12 h-12 text-gray-400" />
          )}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        </div>
        <button
          onClick={() => removeFile(index)}
          className="p-1 hover:bg-gray-200 rounded-full"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {Object.keys(policyData).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                  selectedLevel === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Upload Receipts</h2>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm font-medium text-gray-900">
                Click to upload or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-500">
                PDF, PNG, JPG up to 10MB each
              </p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
            />

            <div className="mt-6 space-y-2">
              {selectedFiles.map((file, index) => renderFilePreview(file, index))}
            </div>

            {selectedFiles.length > 0 && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className={`mt-4 w-full py-2 px-4 rounded-lg font-medium ${
                  uploading
                    ? 'bg-gray-200 text-gray-500'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {uploading ? 'Uploading...' : 'Upload Files'}
              </button>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Policy Details</h2>
            {Object.entries(policyData[selectedLevel]).map(([category, policies]) => (
              <div key={category} className="mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-2">{category}</h3>
                <div className="space-y-2">
                  {Object.entries(policies).map(([policy, limit]) => (
                    <div key={policy} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{policy}</span>
                      <span className="text-sm font-medium text-gray-900">{limit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptUploader;