import { SimpleGrid, Text } from '@chakra-ui/react';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from './CharacterCard';
import CharacterCardSkeleton from './CharacterCardSkeleton';
import CharacterCardContainer from './CharacterCardContainer';

const CharacterGrid = () => {
  const { characters, error, isLoading } = useCharacters();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
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
    </>
  );
};

export default CharacterGrid;
