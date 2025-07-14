// API service for benchmarking data
// This is a starter template - candidates will extend this

import type { BenchmarkRequest, BenchmarkResponse } from './types'

const API_BASE_URL = 'http://localhost:4000'

// Basic function to fetch benchmark data from Scope3 API via our backend
export const fetchBenchmarkData = async (
  requestData: BenchmarkRequest
): Promise<BenchmarkResponse> => {
  const response = await fetch(`${API_BASE_URL}/forward`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`)
  }

  return response.json()
}

// Add additional API functions as you build new endpoints
