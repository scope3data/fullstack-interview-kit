// TypeScript types for the Scope3 benchmarking API
// Based on real API structure - candidates should explore and extend these

// Core API response from Scope3 /v2/benchmarks endpoint
export interface BenchmarkDataPoint {
  adSelectionAndMediaDistributionEmissionsPerImpression: number
  percentile: number
}

export interface MeasureResponse {
  benchmarks: BenchmarkDataPoint[]
  requestId: string
}

interface RequestRow {
  inventoryId: string
  impressions: number
  deviceType: string
  rowIdentifier: string
  utcDatetime: string
}

// Request structure for the /forward endpoint
export interface MeasureRequest {
  channel?: string
  country?: string
  ymd?: string
  rows?: RequestRow[]
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
