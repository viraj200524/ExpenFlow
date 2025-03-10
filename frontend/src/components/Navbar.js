import React from "react";
import { Building, User } from "lucide-react";
import LoginButton from "./LogInButton/LoginButton";
import { Link } from "react-router-dom";
import LogoutButton from "./LogOutButton/LogoutButton";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100 px-12">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to='/' className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            ExpenFlow
          </Link>
          <div className="flex gap-8">
            {/* <Link to="/userDashboard" className="text-purple-900 hover:text-purple-700 transition-colors">Dashboard</Link>  
            <Link to="/userUpload" className="text-purple-900 hover:text-purple-700 transition-colors">Upload</Link>   */}
            <Link to="/chatbot" className="text-purple-900 hover:text-purple-700 transition-colors">ChatBot</Link>  
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;