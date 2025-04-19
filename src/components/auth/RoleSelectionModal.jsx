import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaUserTie, FaChalkboardTeacher, FaTimes } from 'react-icons/fa';

const RoleSelectionModal = ({ isOpen, onClose, mode }) => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  
  if (!isOpen) return null;
  
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    
    // Navigate to the appropriate page with the role as a query parameter
    navigate(`/${mode}?type=${role}`);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {mode === 'login' ? 'Login As' : 'Register As'}
          </h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        
        {/* Role Selection */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            Please select your role to {mode === 'login' ? 'login' : 'register'}:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Student */}
            <button
              onClick={() => handleRoleSelect('student')}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                selectedRole === 'student' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <FaUserGraduate className="text-3xl text-primary" />
              </div>
              <span className="font-medium text-gray-800">Student</span>
            </button>
            
            {/* Recruiter */}
            <button
              onClick={() => handleRoleSelect('recruiter')}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                selectedRole === 'recruiter' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <FaUserTie className="text-3xl text-primary" />
              </div>
              <span className="font-medium text-gray-800">Recruiter</span>
            </button>
            
            {/* Admin */}
            <button
              onClick={() => handleRoleSelect('admin')}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                selectedRole === 'admin' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <FaChalkboardTeacher className="text-3xl text-primary" />
              </div>
              <span className="font-medium text-gray-800">Admin</span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="btn btn-outline mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => selectedRole && handleRoleSelect(selectedRole)}
            disabled={!selectedRole}
            className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionModal;