export interface Track {
  id: string;
  title: string;
  producer: string;
  producerSlug: string;
  genre: string;
  subgenre?: string;
  bpm: number;
  key: string;
  duration: number;
  mood: string[];
  tags: string[];
  plays: number;
  likes: number;
  licenses: {
    basic: number;
    premium: number;
    exclusive: number;
  };
  coverGradient: string;
  audioUrl?: string;
  featured?: boolean;
  isNew?: boolean;
  releaseDate: string;
}

export interface CartItem {
  track: Track;
  licenseType: 'basic' | 'premium' | 'exclusive';
  price: number;
}
