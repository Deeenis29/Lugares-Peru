export const REGIONS = {
  cusco: 'Cusco',
  arequipa: 'Arequipa', 
  lima: 'Lima',
  piura: 'Piura',
  loreto: 'Loreto',
  ancash: 'Ancash',
  puno: 'Puno',
  ica: 'Ica',
  cajamarca: 'Cajamarca',
  huancavelica: 'Huancavelica'
} as const;

export const CATEGORIES = {
  arqueologico: { es: 'Arqueológico', en: 'Archaeological' },
  natural:      { es: 'Natural',      en: 'Natural' },
  cultural:     { es: 'Cultural',     en: 'Cultural' },
  aventura:     { es: 'Aventura',     en: 'Adventure' },
  gastronomico: { es: 'Gastronómico', en: 'Gastronomic' },
  religioso:    { es: 'Religioso',    en: 'Religious' }
} as const;

export const DIFFICULTY_STYLES = {
  es: {
    Fácil:    { color: 'text-green-600', bg: 'bg-green-100' },
    Moderado: { color: 'text-yellow-600', bg: 'bg-yellow-100' },
    Difícil:  { color: 'text-red-600', bg: 'bg-red-100' }
  },
  en: {
    Easy:     { color: 'text-green-600', bg: 'bg-green-100' },
    Moderate: { color: 'text-yellow-600', bg: 'bg-yellow-100' },
    Hard:     { color: 'text-red-600', bg: 'bg-red-100' }
  }
} as const;

export const CURRENCY_SYMBOLS = {
  PEN: 'S/.',
  USD: '$'
} as const;

export const APP_CONFIG = {
  name: 'Lugares del Perú',
  description: 'Descubre los destinos más increíbles del Perú',
  version: '1.0.0'
} as const;