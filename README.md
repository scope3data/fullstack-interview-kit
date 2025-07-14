# Carbon Emissions Benchmarking Exercise

## Overview

This is a fullstack development exercise for building a carbon emissions benchmarking dashboard for digital advertising. You'll work with real data from Scope3's carbon emissions API to create a system that helps advertisers understand and compare environmental impact across different properties.

## Project Setup

1. ** Use `nvm` to enable the correct Node.js version for the project:
   ```bash
   nvm use
   ```

2. Run `npm install` in the root directory to install dependencies for both the backend and frontend.

### Getting Started

1. **Setup Environment Variables**:
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env and add your API token (provided by interviewer)
   ```

2. **Start the Backend**:
   ```bash
   npm run backend:start
   ```

3. **Start the Frontend**:
   ```bash
   npm run frontend:start
   ```

### Project Structure

```
├── backend/          # TypeScript Express server
│   ├── app.ts       # Main server file with /forward endpoint
│   ├── tests/       # Jest test files
│   ├── .env.example # Environment variables template
│   ├── jest.config.js
│   └── package.json
├── frontend/         # React TypeScript application
│   ├── src/
│   │   ├── types.ts     # TypeScript type definitions
│   │   ├── api.ts       # API service functions
│   │   ├── constants.ts # Available channels and countries
│   │   └── App.tsx      # Main application component
│   └── package.json
├── .gitignore        # Git ignore rules
└── README.md
```

## Understanding the Data

The backend provides a `/forward` endpoint that proxies requests to Scope3's API:

```bash
# Example API calls:
POST /forward
{ "channel": "web", "country": "US" }

POST /forward
{ "channel": "app", "country": "GB" }
```

**Available Options:**
- **Channels**: `web`, `app`
- **Countries**: See `frontend/src/constants.ts` for the full list

The API returns carbon emissions benchmarks measured as emissions per thousand impressions, organized by percentiles.

## What You'll Be Building

The frontend includes a starter DataGrid displaying sample property data (Property Name, Channel, Country, CO2 values) to give you a visual starting point.

Your interviewer will provide specific tasks, but generally you'll be creating a dashboard that allows advertisers to:
- View carbon emissions data for different advertising properties
- Compare emissions across channels and countries
- Organize and analyze collections of properties

## Resources Available

- **TypeScript Types**: Starter types in `frontend/src/types.ts`
- **API Service**: Basic fetch function in `frontend/src/api.ts`
- **Constants**: Predefined channels and countries in `frontend/src/constants.ts`
- **Backend Testing**: Jest setup with sample tests in `backend/tests/` (run with `npm test`)
- **Scope3 API Docs**: Find our documentation of the `/v2/measure` api [here](https://docs.scope3.com/reference/measure-1)

### Available UI Libraries

- **Material-UI Core**: Buttons, Cards, Typography, Forms, etc.
- **MUI Data Grid**: Professional data tables with sorting, filtering, and selection
- **MUI X Charts**: Bar charts, line charts, pie charts for data visualization
- **MUI Icons**: Comprehensive icon library for UI elements

## Approach

- Take your time to understand the requirements and ask questions
- Build incrementally - get each piece working before moving to the next
- Focus on functionality over styling - Material-UI is provided for easy UI development
- Consider user experience and real-world usage
- Don't hesitate to ask for clarification on any requirements

Your interviewer will guide you through the specific features to implement. The goal is to demonstrate your fullstack development skills, API design thinking, and ability to build user-focused interfaces.
