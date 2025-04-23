import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown"; 
import { AnalysisResult, AnalysisStatus } from "../types";
// Icons might not be needed anymore if AI includes them or we rely on Markdown styling
// import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface ResultsDisplayProps {
  result: AnalysisResult | null;
  status: AnalysisStatus;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, status }) => {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "completed" && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  if (status !== "completed" || !result) {
    return null;
  }

  return (
    <div
      ref={resultRef}
      className="w-full mt-8 bg-gradient-to-b from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-xl border border-purple-700/30 p-6 shadow-xl animate-fadeIn"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Analysis Results</h2>

      <div className="prose prose-invert prose-headings:text-purple-200 prose-p:text-purple-100/90 prose-li:text-purple-100/90 prose-ul:list-disc prose-ul:pl-5 prose-strong:text-purple-100">
        <ReactMarkdown>{result.summary}</ReactMarkdown>
      </div>

      <div className="border-t border-purple-700/30 pt-4 mt-6 text-right">
        <div className="text-xs text-purple-400">
          Analysis generated on: {new Date(result.timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
