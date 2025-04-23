import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ResultsDisplay from "./components/ResultsDisplay";
import { AnalysisResult, AnalysisStatus, TokenomicsData } from "./types";
import { sendToIO } from "./services/ioService"; 

function App() {
  const [status, setStatus] = useState<AnalysisStatus>("idle");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (data: TokenomicsData) => {
    const inputText = data.tokenDistribution || "";
    if (!inputText) {
      console.warn("No input text provided for analysis.");
      setStatus("idle");
      return;
    }

    try {
      setStatus("analyzing");
      setResult(null); // Clear previous results
      const analysisText = await sendToIO(inputText);

      const analysisResult: AnalysisResult = {
        summary: analysisText,
        strengths: [], 
        concerns: [], 
        recommendations: [], 
        overallRating: 0, 
        timestamp: new Date().toISOString(), 
      };

      setResult(analysisResult);
      setStatus("completed");
    } catch (error) {
      console.error("Analysis failed:", error);
      setStatus("error");
      setResult(null); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 text-white">
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              Tokenomics Analysis Agent
            </h2>
            <p className="text-purple-200/80 max-w-2xl mx-auto">
              Enter your tokenomics data below for an AI-powered analysis. Our
              agent will evaluate token distribution, vesting schedules, and
              overall economic design to provide actionable insights.
            </p>
          </div>

          <InputForm onAnalyze={handleAnalyze} status={status} />

          {status === "error" && (
            <div className="mt-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-200">
              An error occurred during analysis. Please try again.
            </div>
          )}

          <ResultsDisplay result={result} status={status} />
        </main>
      </div>
    </div>
  );
}

export default App;
