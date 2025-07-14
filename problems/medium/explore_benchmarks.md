## 🎯 Ticket: Implement Monthly Emissions Trend Analysis CLI Command

**Type:** Feature
**Priority:** Medium
**Component:** Explore Dashboard
**Status:** Not Started

### 📋 Description

We want to visualize our carbon footprint benchmark data for a variety of web properties and give our customers a way to explore and filter through that data. For a list of properties, you can use the hardcoded list of properties provided in teh constants file.

### 🎯 Acceptance Criteria

- [ ] **API Exploration & Single Property Connection**: Explore the `/forward` API endpoint with different channel/country combinations, understand the data structure, and replace dummy table data with a real API call for a single property
- [ ] **Enhanced Table with Benchmark Data**: Update the table to display meaningful benchmark information including percentile data from the API response
- [ ] **Multiple Properties Collection**: Add ability to fetch and display data for multiple properties in the table, handling async operations and potential errors
- [ ] **Filtering and Organization**: Implement filtering and sorting capabilities for property data (by emissions, channel, country, etc.) with appropriate UI controls
- [ ] **Production Ready Discussion**: Design approach for replacing hard-coded property lists with user-provided lists, considering input methods, code changes, and error handling

### 👤 User Stories

**As a sustainability analyst**, I want to quickly view carbon emissions data for my company's web properties so that I can understand our current environmental impact.

**As a digital marketing manager**, I want to explore emissions data across different channels (web, app) and countries so that I can identify which markets and platforms have the highest carbon footprint.

**As an environmental compliance officer**, I want to see how our properties rank against industry benchmarks (percentiles) so that I can report on our relative performance to stakeholders.

**As a product manager**, I want to load and view emissions data for multiple properties at once so that I can efficiently assess our entire digital portfolio without making individual requests.

**As a data analyst**, I want to filter and sort properties by emissions levels, channels, and countries so that I can quickly identify outliers and patterns in our carbon footprint data.
