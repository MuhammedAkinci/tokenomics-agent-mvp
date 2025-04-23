// Type definitions for the application

export interface TokenomicsData {
  tokenDistribution?: string;
  totalSupply?: string;
  vestingDetails?: string;
  additionalInfo?: string;
}

export interface AnalysisResult {
  summary: string;
  strengths: string[];
  concerns: string[];
  recommendations: string[];
  overallRating: number;
  timestamp: string;
}

export type AnalysisStatus = 'idle' | 'analyzing' | 'completed' | 'error';