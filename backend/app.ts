import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'
import type { Request, Response } from 'express'
import express from 'express'

interface RequestRow {
  inventoryId: string
  impressions: number
  deviceType: string
  rowIdentifier: string
  utcDatetime: string
}

// Interface for the basic benchmark request
interface ApiRequest {
  channel?: string
  country?: string
  ymd?: string
  rows?: RequestRow[]
  [key: string]: any // Allow additional properties
}

// Load environment variables
dotenv.config()
const PORT = process.env.PORT || 4000
const token = process.env.SCOPE3_API_TOKEN
if (!token) {
  console.error('SCOPE3_API_TOKEN environment variable is required')
  console.error('Copy .env.example to .env and add your API token')
  console.error('Contact your interviewer to get the API token')
  process.exit(1)
}

const app = express()
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

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
  async (req: Request<{}, any, ApiRequest>, res: Response) => {
    try {
      // Transform the request body to use the proper API parameters
      const { channel, country, ymd, rows = [], ...otherParams } = req.body

      let apiBody: any = {
        country,
        ymd,
        rows,
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
    } catch (error: unknown) {
      console.error('Error forwarding request:', (error as Error).message)
      if (error && axios.isAxiosError(error)) {
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

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    console.log('Available endpoints:')
    console.log('  POST /forward - Forward requests to Scope3 API')
  })
}

export default app
