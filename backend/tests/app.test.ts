import request from 'supertest'
import axios from 'axios'
import { mockBenchmarkResponse } from './setup'

// Mock axios for testing
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// Set test environment before importing app
process.env.NODE_ENV = 'test'

// Import app after mocking axios and setting environment
import app from '../app'

describe('/forward endpoint', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should forward request to Scope3 API and return response', async () => {
    // Mock successful API response
    mockedAxios.post.mockResolvedValue({
      status: 200,
      data: mockBenchmarkResponse,
    })

    const requestBody = {
      channel: 'web',
      country: 'US',
    }

    const response = await request(app)
      .post('/forward')
      .send(requestBody)
      .expect(200)

    expect(response.body).toEqual(mockBenchmarkResponse)
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'https://api.scope3.com/v2/benchmarks',
      expect.objectContaining({
        country: 'US',
        device: 'desktop', // Should map 'web' to 'desktop'
      }),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: expect.stringContaining('Bearer'),
          'Content-Type': 'application/json',
        }),
      })
    )
  })

  it('should map channel "app" to device "mobile"', async () => {
    mockedAxios.post.mockResolvedValue({
      status: 200,
      data: mockBenchmarkResponse,
    })

    const requestBody = {
      channel: 'app',
      country: 'GB',
    }

    await request(app).post('/forward').send(requestBody).expect(200)

    expect(mockedAxios.post).toHaveBeenCalledWith(
      'https://api.scope3.com/v2/benchmarks',
      expect.objectContaining({
        country: 'GB',
        device: 'mobile', // Should map 'app' to 'mobile'
      }),
      expect.any(Object)
    )
  })

  it('should handle API errors gracefully', async () => {
    const errorResponse = {
      response: {
        status: 400,
        data: { message: 'Bad request' },
      },
    }

    mockedAxios.post.mockRejectedValue(errorResponse)

    const requestBody = {
      channel: 'web',
      country: 'US',
    }

    const response = await request(app)
      .post('/forward')
      .send(requestBody)
      .expect(400)

    expect(response.body).toEqual({ message: 'Bad request' })
  })

  it('should handle network errors', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Network error'))

    const requestBody = {
      channel: 'web',
      country: 'US',
    }

    const response = await request(app)
      .post('/forward')
      .send(requestBody)
      .expect(500)

    expect(response.body).toEqual({ message: 'Internal server error' })
  })
})

describe('Server setup', () => {
  it('should respond to basic health check', async () => {
    // Test that the server is properly set up
    const response = await request(app).get('/nonexistent').expect(404)
  })
})
