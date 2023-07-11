import { SimpleGrid } from '@chakra-ui/react';
import CharacterCard from './CharacterCard';
import CharacterCardSkeleton from './CharacterCardSkeleton';
import CharacterCardContainer from './CharacterCardContainer';
import useCharacters from '../hooks/useCharacters';
import { Species } from '../data/species';

interface Props {
  selectedSpecies: Species | null;
}

const CharacterGrid = ({ selectedSpecies }: Props) => {
  const { data: characters, isLoading } = useCharacters(selectedSpecies);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={8}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <CharacterCardContainer key={skeleton}>
            <CharacterCardSkeleton />
          </CharacterCardContainer>
        ))}
      {characters.map((character) => (
        <CharacterCardContainer key={character.id}>
          <CharacterCard character={character} />
        </CharacterCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default CharacterGrid;
