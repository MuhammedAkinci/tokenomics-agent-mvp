import { AnalysisResult, TokenomicsData } from '../types';

// Mock analysis function to simulate AI processing
export const analyzeTokenomics = (data: TokenomicsData): Promise<AnalysisResult> => {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // Check if the input contains certain keywords to customize the mock response
      const input = data.tokenDistribution?.toLowerCase() || '';
      
      let result: AnalysisResult = {
        summary: "Based on the provided tokenomics data, this appears to be a moderately balanced token distribution with some concerning elements that could benefit from adjustments to improve long-term sustainability and investor confidence.",
        strengths: [
          "The token distribution includes allocations for ecosystem development, which supports long-term growth",
          "Vesting schedules are implemented for team and advisor tokens, reducing immediate selling pressure",
          "Community allocation demonstrates commitment to decentralization"
        ],
        concerns: [
          "High allocation to team and founders (25%) may raise centralization concerns",
          "Relatively short cliff period for team tokens could create selling pressure",
          "Limited transparency around use of treasury funds"
        ],
        recommendations: [
          "Consider extending vesting schedules for team and advisor allocations",
          "Implement more transparent governance mechanisms for treasury management",
          "Increase community allocation to improve decentralization metrics",
          "Develop and publish a clear token utility roadmap"
        ],
        overallRating: 6.5,
        timestamp: new Date().toLocaleString()
      };
      
      // Customize based on input keywords
      if (input.includes('team') && (input.includes('40%') || input.includes('50%'))) {
        result.concerns.push("Extremely high team allocation raises serious centralization concerns");
        result.recommendations.push("Significantly reduce team allocation to improve token distribution");
        result.overallRating = 3.5;
      }
      
      if (input.includes('community') && (input.includes('50%') || input.includes('60%'))) {
        result.strengths.push("Excellent community-focused distribution promotes decentralization");
        result.overallRating = 8.5;
      }
      
      resolve(result);
    }, 2000); // 2 second delay to simulate processing
  });
};