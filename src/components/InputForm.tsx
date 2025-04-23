import React, { useState } from 'react';
import { Play, X, Loader2 } from 'lucide-react';
import { AnalysisStatus, TokenomicsData } from '../types';

interface InputFormProps {
  onAnalyze: (data: TokenomicsData) => void;
  status: AnalysisStatus;
}

const InputForm: React.FC<InputFormProps> = ({ onAnalyze, status }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleClear = () => {
    setInputValue('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAnalyze({ 
        tokenDistribution: inputValue 
      });
    }
  };

  const isLoading = status === 'analyzing';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter tokenomics data here (token distribution, total supply, vesting details, etc.)"
          className="w-full h-64 p-4 bg-purple-950/40 border border-purple-700/50 rounded-lg text-white placeholder-purple-400/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-3 right-3 p-1 rounded-full bg-purple-800/50 hover:bg-purple-700/70 text-purple-300 transition-colors duration-200"
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={handleClear}
          className="px-5 py-2.5 rounded-lg border border-purple-700/50 text-purple-200 hover:bg-purple-800/30 transition-colors duration-200"
          disabled={isLoading || !inputValue}
        >
          Clear
        </button>
        <button
          type="submit"
          disabled={isLoading || !inputValue}
          className={`px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium flex items-center gap-2 transition-all duration-300 ${
            isLoading || !inputValue ? 'opacity-70 cursor-not-allowed' : 'shadow-lg shadow-purple-700/20'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Play size={18} className="text-purple-200" />
              <span>Start Analysis</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default InputForm;