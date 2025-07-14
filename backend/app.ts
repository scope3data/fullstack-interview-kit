import express from 'express'
import type { Request, Response } from 'express'
import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// Middleware to parse JSON bodies
app.use(express.json())

// Enable CORS for localhost:3000
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

// Get API token from environment variables
const token = process.env.SCOPE3_API_TOKEN

if (!token) {
  console.error('SCOPE3_API_TOKEN environment variable is required')
  console.error('Copy .env.example to .env and add your API token')
  console.error('Contact your interviewer to get the API token')
  process.exit(1)
}

// Interface for the basic benchmark request
interface BenchmarkRequest {
  channel?: string
  country?: string
  ymd?: string
  [key: string]: any // Allow additional properties
}

// Helper function to map frontend channels to API parameters
function mapChannelToApiParams(channel: string): { [key: string]: any } {
  switch (channel) {
    case 'web':
      return { device: 'desktop' }
    case 'app':
      return { device: 'mobile' }
    default:
      return { device: 'desktop' } // Default fallback
  }
}

// POST /forward - Forward requests to Scope3 API
app.post(
  '/forward',
  async (req: Request<{}, any, BenchmarkRequest>, res: Response) => {
    try {
      // Transform the request body to use the proper API parameters
      const { channel, country, ymd, ...otherParams } = req.body

      let apiBody: any = {
        country,
        ymd,
        ...otherParams,
      }

      // Map frontend channel to API device parameter
      if (channel) {
        const deviceParams = mapChannelToApiParams(channel)
        apiBody = { ...apiBody, ...deviceParams }
      }

      const response: AxiosResponse = await axios.post(
        'https://api.scope3.com/v2/measure?fields=all&includeRows=true&framework=scope3&latest=true',
        apiBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      // Send back the response from the external API
      res.status(response.status).json(response.data)
    } catch (error) {
      console.error('Error forwarding request:', error)

      // Handle error responses
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as AxiosError
        if (axiosError.response) {
          res.status(axiosError.response.status).json(axiosError.response.data)
        } else {
          res.status(500).json({ message: 'Network error' })
        }
      } else {
        res.status(500).json({ message: 'Internal server error' })
      }
    }
  }
)

// Candidate will add additional endpoints here as needed

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    console.log('Available endpoints:')
    console.log('  POST /forward - Forward requests to Scope3 API')
  })
}

// Export app for testing
export default app
