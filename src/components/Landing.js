import React from 'react';
import { Power, Download, Instagram, Dribbble, Heart, Star, Zap, LogIn, DollarSign, ChartBar } from 'lucide-react';
import { GameCardCarousel } from './GameCard';
import { GameBoy } from './GameBoy';
import BombasticText from '../assets/fonts/mario';
import LoginButton from './LogInButton/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogOutButton/LogoutButton';

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  
  const cards = [
    {
      title: "Receipt Scanner",
      description: "Automatically scan and process receipts using AI-powered OCR. Track expenses effortlessly!",
      year: "2025",
      Icon: Star,
      color: "from-green-100 to-green-200",
    },
    {
      title: "Fraud Detection",
      description: "Advanced AI algorithms to detect suspicious patterns and protect your finances.",
      year: "2025",
      Icon: Zap,
      color: "from-blue-100 to-blue-200",
    },
    {
      title: "Analytics Dashboard",
      description: "Visualize your spending patterns with interactive charts and insights.",
      year: "2025",
      Icon: ChartBar,
      color: "from-purple-100 to-purple-200",
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-white to-orange-50 min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BombasticText 
              text="ExpenFlow" 
              className="text-3xl text-gray-800"
              style={{ fontFamily: 'mario' }}
            />
          </div>
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-12 border-b border-gray-200">
        <div className="col-span-6 p-32">
          <div className="text-6xl font-black mb-6 leading-tight text-gray-800">
            TRACK YOUR
            <br />
            <BombasticText 
              text="Expenses" 
              className="text-6xl text-purple-600"
              style={{ fontFamily: 'mario' }}
            />
            LIKE A GAME
          </div>
          <p className="text-gray-600 mb-8 text-lg">Navigate your finances with retro-style tracking!</p>
          <div className="flex gap-4">
            <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-lg font-medium flex items-center gap-2">
              <DollarSign className="w-6 h-6" />
              START TRACKING
            </button>
          </div>
        </div>

        <GameBoy customContent={
          <div className="relative w-full h-full bg-black p-4">
            <div className="pixel-art-mario animate-walk"></div>
            <div className="floating-coins">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="pixel-art-coin animate-float" style={{
                  animationDelay: `${i * 0.5}s`,
                  left: `${20 + i * 20}%`
                }}></div>
              ))}
            </div>
          </div>
        } />
      </div>

      {/* Features Section with Carousel */}
      <div className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Tools</h2>
          <GameCardCarousel cards={cards} />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .pixel-art-mario {
          width: 32px;
          height: 32px;
          background: url('/mario-sprite.png') no-repeat;
          position: absolute;
          bottom: 20%;
        }

        .pixel-art-coin {
          width: 50px;
          height: 50px;
          background: url('/coin-sprite.png') no-repeat;
          position: absolute;
          top: 40%;
        }

        @keyframes walk {
          from { transform: translateX(0); }
          to { transform: translateX(200px); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        .animate-walk {
          animation: walk 3s infinite alternate;
        }

        .animate-float {
          animation: float 2s infinite ease-in-out;
        }
      `}</style>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About ExpenFlow</h4>
              <p className="text-gray-600">Making expense tracking fun and secure.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Receipt Scanner</li>
                <li>Fraud Detection</li>
                <li>Analytics</li>
                <li>Reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>FAQ</li>
                <li>Contact</li>
                <li>Documentation</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
            <p className="text-gray-600">&copy; 2025 ExpenFlow. All rights reserved.</p>
            <div className="flex items-center gap-2 text-[#d36735]">
  <Heart className="w-4 h-4" />
  <span className="text-inherit">Made with love for smart spending</span>
</div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;