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
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 5 }} spacing={10} p={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <CharacterCardContainer>
              <CharacterCardSkeleton key={skeleton} />
            </CharacterCardContainer>
          ))}
        {characters.map((character) => (
          <CharacterCardContainer>
            <CharacterCard key={character.id} character={character} />
          </CharacterCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CharacterGrid;
