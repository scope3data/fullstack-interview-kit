## 🎯 Ticket: Implement Monthly Emissions Trend Analysis CLI Command

**Type:** Feature
**Priority:** Medium
**Component:** Explore Dashboard
**Status:** Not Started

### 📋 Description

We want to visualize our carbon footprint benchmark data for a variety of web properties and give our customers a way to explore and filter through that data.

### 🎯 Acceptance Criteria

- [ ] **API Exploration & Single Property Connection**: Explore the `/forward` API endpoint with different channel/country combinations, understand the data structure, and replace dummy table data with a real API call for a single property
- [ ] **Enhanced Table with Benchmark Data**: Update the table to display meaningful benchmark information including percentile data from the API response
- [ ] **Multiple Properties Collection**: Add ability to fetch and display data for multiple properties in the table, handling async operations and potential errors
- [ ] **Filtering and Organization**: Implement filtering and sorting capabilities for property data (by emissions, channel, country, etc.) with appropriate UI controls
- [ ] **Property Comparison Feature**: Build a way for users to compare properties side-by-side, showing percent differences between property emissions with property selection and comparison view
- [ ] **Property Search**: Add a way for users to search for specific properties by domain; it should support small lists of domains.

### 👤 User Stories

**As a sustainability analyst**, I want to quickly view carbon emissions data for my company's web properties so that I can understand our current environmental impact.

**As a digital marketing manager**, I want to explore emissions data across different channels (web, app) and countries so that I can identify which markets and platforms have the highest carbon footprint.

**As an environmental compliance officer**, I want to see how our properties rank against industry benchmarks (percentiles) so that I can report on our relative performance to stakeholders.

**As a product manager**, I want to load and view emissions data for multiple properties at once so that I can efficiently assess our entire digital portfolio without making individual requests.

**As a data analyst**, I want to filter and sort properties by emissions levels, channels, and countries so that I can quickly identify outliers and patterns in our carbon footprint data.

**As a sustainability manager**, I want to compare multiple properties side-by-side with clear visualizations of percentage differences so that I can prioritize which properties need the most urgent environmental improvements.

**As a business stakeholder**, I want to select specific properties for detailed comparison so that I can make data-driven decisions about resource allocation for carbon reduction initiatives.


