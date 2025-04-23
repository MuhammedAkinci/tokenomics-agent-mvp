import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-md py-4 px-6 flex justify-between items-center border-b border-purple-700/30">
      <div className="flex items-center gap-2">
        <Zap size={28} className="text-purple-300" />
        <h1 className="text-2xl font-bold text-white">Tokenomics Analyzer</h1>
      </div>
      <div className="flex items-center">
        <span className="text-xs text-purple-200 opacity-80">Powered by</span>
        <span className="ml-1 text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">io.net</span>
      </div>
    </header>
  );
};

export default Header;