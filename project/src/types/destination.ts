export interface Attraction {
  name: string;
  link: string;
  description?: string;
}

export interface Accommodation {
  name: string;
  booking_link: string;
  price?: string;
  rating?: number;
}

export interface AccommodationTiers {
  budget: Accommodation[];
  mid_range: Accommodation[];
  luxury: Accommodation[];
}

export interface DestinationImage {
  url: string;
  caption: string;
  source?: string;
}

export interface Transport {
  getting_there: string;
  local: string;
}

export interface DestinationData {
  destination: string;
  country: string;
  categories: string[];
  attractions: Attraction[];
  accommodations: AccommodationTiers;
  images: DestinationImage[];
  food: string[];
  transport: Transport;
  overview?: string;
  climate?: string;
  safety?: string;
  culture?: string;
  best_time?: string;
  budget_tips?: string[];
}