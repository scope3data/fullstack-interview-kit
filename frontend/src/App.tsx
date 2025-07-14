import { Box, Container, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { GridColDef } from '@mui/x-data-grid'
import { DataGrid } from '@mui/x-data-grid'
import { APP_PROPERTIES, COUNTRIES, WEB_PROPERTIES } from './constants'
import type { PropertyRowData } from './types'

// Create a clean Material-UI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

// Generate sample data using real properties
const generateSampleData = (): PropertyRowData[] => {
  const data: PropertyRowData[] = []
  let id = 1

  // Add some web properties
  const webSample = WEB_PROPERTIES.slice(0, 5)
  for (const property of webSample) {
    data.push({
      id: id++,
      propertyName: property.name,
      channel: 'web' as const,
      country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)].value,
      co2Grams: Math.floor(Math.random() * 400) + 100, // Random between 100-500
    })
  }

  // Add some app properties
  const appSample = APP_PROPERTIES.slice(0, 5)
  for (const property of appSample) {
    data.push({
      id: id++,
      propertyName: property.name,
      channel: 'app' as const,
      country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)].value,
      co2Grams: Math.floor(Math.random() * 400) + 100, // Random between 100-500
    })
  }

  return data
}

const sampleData = generateSampleData()

// DataGrid column definitions
const columns: GridColDef[] = [
  { field: 'propertyName', headerName: 'Property Name', width: 200 },
  { field: 'channel', headerName: 'Channel', width: 120 },
  { field: 'country', headerName: 'Country', width: 120 },
  { field: 'co2Grams', headerName: 'CO2 (grams)', width: 150, type: 'number' },
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Carbon Emissions Benchmarking Dashboard
          </Typography>

          <Box sx={{ height: 400, width: '100%', mt: 4 }}>
            <DataGrid
              rows={sampleData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
