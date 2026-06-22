import { tracks } from './tracks';

export interface Producer {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  bio: string;
  genres: string[];
  followers: number;
  gradient: string;
}

export const producers: Producer[] = [
  {
    id: 'nova',
    name: 'NOVA',
    slug: 'nova',
    tagline: 'Trap architect. Cinematic dreamer.',
    bio: 'NOVA blends hard-hitting 808s with atmospheric textures, crafting instrumentals that move between aggression and ambience without losing intensity.',
    genres: ['Trap', 'Electronic', 'Cinematic'],
    followers: 18400,
    gradient: 'linear-gradient(135deg, #1a0a35 0%, #3d1f8a 50%, #06060a 100%)',
  },
  {
    id: 'mara',
    name: 'MARA',
    slug: 'mara',
    tagline: 'Soul in the machine.',
    bio: 'MARA writes from the in-between — warm neo-soul chords colliding with the precision of modern drill. Every track carries an emotional throughline.',
    genres: ['R&B', 'Lo-Fi', 'Hip-Hop'],
    followers: 24100,
    gradient: 'linear-gradient(135deg, #2d0030 0%, #7c3aed 60%, #1a0a35 100%)',
  },
  {
    id: 'elyx',
    name: 'ELYX',
    slug: 'elyx',
    tagline: 'Hypnosis through rhythm.',
    bio: 'ELYX has spent a decade studying the physics of a groove. Dark techno, boom bap, ambient house — all built on the same obsession with motion.',
    genres: ['Electronic', 'Hip-Hop'],
    followers: 12700,
    gradient: 'linear-gradient(135deg, #06060a 0%, #1e1040 40%, #3d1f8a 100%)',
  },
  {
    id: 'kiro',
    name: 'KIRO',
    slug: 'kiro',
    tagline: 'Scores for stories untold.',
    bio: 'KIRO composes like a film director thinks in scenes. Every release is built around tension, release, and the space in between.',
    genres: ['Cinematic', 'R&B'],
    followers: 31600,
    gradient: 'linear-gradient(135deg, #0d0020 0%, #1a0a35 40%, #5b1a8a 100%)',
  },
];

export function trackCountFor(slug: string) {
  return tracks.filter(t => t.producerSlug === slug).length;
}
