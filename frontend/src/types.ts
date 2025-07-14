// TypeScript types for the Scope3 benchmarking API
// Based on real API structure - candidates should explore and extend these

// Core API response from Scope3 /v2/benchmarks endpoint
export interface BenchmarkDataPoint {
  adSelectionAndMediaDistributionEmissionsPerImpression: number
  percentile: number
}

export interface BenchmarkResponse {
  benchmarks: BenchmarkDataPoint[]
  requestId: string
}

// Request structure for the /forward endpoint
export interface BenchmarkRequest {
  channel?: string
  country?: string
  ymd?: string
}

// Supported channels for this exercise
export type Channel = 'web' | 'app'

// Supported countries - see constants.ts for full list
export type Country = string

// DataGrid row data type
export interface PropertyRowData {
  id: number
  propertyName: string
  channel: Channel
  country: string
  co2Grams: number
}

// Extend these types as needed for your implementation
