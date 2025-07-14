// Constants for the benchmarking application

// Supported channels for the interview exercise
export const CHANNELS = [
  { value: 'web', label: 'Web' },
  { value: 'app', label: 'Mobile App' },
] as const

// Supported countries - hardcoded for interview purposes
export const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'AU', label: 'Australia' },
  { value: 'JP', label: 'Japan' },
  { value: 'BR', label: 'Brazil' },
  { value: 'MX', label: 'Mexico' },
  { value: 'IN', label: 'India' },
  { value: 'SG', label: 'Singapore' },
] as const

export type ChannelValue = (typeof CHANNELS)[number]['value']
export type CountryValue = (typeof COUNTRIES)[number]['value']

// Sample properties for testing multiple properties at once
export const WEB_PROPERTIES = [
  { domain: 'yahoo.com', name: 'Yahoo' },
  { domain: 'weather.com', name: 'Weather.com' },
  { domain: 'realtor.com', name: 'Realtor' },
  { domain: 'aol.com', name: 'AOL' },
  { domain: 'nytimes.com', name: 'New York Times' },
  { domain: 'accuweather.com', name: 'AccuWeather' },
  { domain: 'people.com', name: 'People' },
  { domain: 'barstoolsports.com', name: 'Barstool Sports' },
  { domain: 'wrestletalk.com', name: 'WrestleTalk' },
  { domain: 'brightside.me', name: 'Bright Side' },
] as const

export const APP_PROPERTIES = [
  { domain: 'spotify.com', name: 'Spotify' },
  { domain: 'plex.tv', name: 'Plex' },
  { domain: 'iheart.com', name: 'iHeartRadio' },
  { domain: 'weather.com', name: 'Weather.com App' },
  { domain: 'com.king.candycrushsaga', name: 'Candy Crush Saga' },
  { domain: 'farm.heroessaga.com', name: 'Farm Heroes Saga' },
  { domain: 'com.whatsapp', name: 'WhatsApp' },
  { domain: 'com.android.chrome', name: 'Chrome Mobile' },
  { domain: 'com.google.android.youtube', name: 'YouTube' },
  { domain: 'com.tencent.mm', name: 'WeChat' },
] as const
