// Test setup and utilities
import type { Express } from 'express'

// Mock Scope3 API responses for testing
export const mockBenchmarkResponse = {
  benchmarks: [
    {
      adSelectionAndMediaDistributionEmissionsPerImpression: 0.059917,
      percentile: 10,
    },
    {
      adSelectionAndMediaDistributionEmissionsPerImpression: 0.0806467,
      percentile: 20,
    },
    {
      adSelectionAndMediaDistributionEmissionsPerImpression: 0.0972693,
      percentile: 30,
    },
    {
      adSelectionAndMediaDistributionEmissionsPerImpression: 0.1251575,
      percentile: 40,
    },
    {
      adSelectionAndMediaDistributionEmissionsPerImpression: 0.1767322,
      percentile: 50,
    },
  ],
  requestId: 'test-request-id',
}

// Test helper to create app instance for testing
export function createTestApp(): Express {
  // Note: In a real app, you might want to extract app creation to a separate function
  // For now, tests will need to import the app directly
  // This is just a placeholder for future test utilities
  throw new Error('Implement createTestApp helper if needed')
}
