
export type PlaceCategory =
  | 'arqueologico'
  | 'natural'
  | 'cultural'
  | 'aventura'
  | 'gastronomico'
  | 'religioso';

export type Region =
  | 'cusco'
  | 'arequipa'
  | 'lima'
  | 'piura'
  | 'loreto'
  | 'ancash'
  | 'puno'
  | 'ica'
  | 'cajamarca'
  | 'huancavelica';

export type Difficulty = 'Fácil' | 'Moderado' | 'Difícil';

export type Currency = 'PEN' | 'USD';

export type MultilangString = {
  es: string;
  en: string;
};

export type MultilangStringArray = {
  es: string[];
  en: string[];
};

export interface Price {
  min: number;
  max: number;
  currency: Currency;
}

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Place {
  id: string;
  name: MultilangString;
  description: MultilangString;
  shortDescription: MultilangString;
  region: string;
  category: PlaceCategory;
  imageUrl: string;
  images: string[];
  location: {
    lat: number;
    lng: number;
    address: MultilangString;
  };
  highlights: MultilangStringArray;
  bestTimeToVisit: MultilangString;
  difficulty: {
    es: string[];
    en: string[];
  };
  duration: MultilangString;
  price: {
    min: number;
    max: number;
    currency: 'USD' | 'PEN';
  };
}

export interface SearchFilters {
  query: string;
  region: Region | '';
  category: PlaceCategory | '';
}
