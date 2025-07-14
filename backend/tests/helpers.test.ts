// Tests for helper functions
// This shows candidates how to test utility functions separately

// Mock the helper function for testing
function mapChannelToApiParams(channel: string): { [key: string]: any } {
  switch (channel) {
    case 'web':
      return { device: 'desktop' }
    case 'app':
      return { device: 'mobile' }
    default:
      return { device: 'desktop' }
  }
}

describe('mapChannelToApiParams', () => {
  it('should map "web" to desktop device', () => {
    const result = mapChannelToApiParams('web')
    expect(result).toEqual({ device: 'desktop' })
  })

  it('should map "app" to mobile device', () => {
    const result = mapChannelToApiParams('app')
    expect(result).toEqual({ device: 'mobile' })
  })

  it('should default to desktop for unknown channels', () => {
    const result = mapChannelToApiParams('unknown')
    expect(result).toEqual({ device: 'desktop' })
  })

  it('should handle empty string', () => {
    const result = mapChannelToApiParams('')
    expect(result).toEqual({ device: 'desktop' })
  })
})
