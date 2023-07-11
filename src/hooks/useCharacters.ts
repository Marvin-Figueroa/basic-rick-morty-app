import { Species } from '../data/species';
import useData from './useData';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

const useCharacters = (species: Species | null) =>
  useData<Character>('/character', { params: { species: species?.name } }, [
    species?.id
  ]);

export default useCharacters;
