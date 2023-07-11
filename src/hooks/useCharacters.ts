import { CharacterQuery } from '../App';
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

const useCharacters = (characterQuery: CharacterQuery) =>
  useData<Character>(
    '/character',
    {
      params: {
        species: characterQuery.species?.name,
        gender:
          characterQuery.gender === 'All Genders'
            ? null
            : characterQuery.gender?.toLowerCase(),
        status: characterQuery.status?.toLowerCase()
      }
    },
    [characterQuery]
  );

export default useCharacters;
