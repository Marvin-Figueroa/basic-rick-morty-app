import { SimpleGrid, Text } from '@chakra-ui/react';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from './CharacterCard';
import CharacterCardSkeleton from './CharacterCardSkeleton';

const CharacterGrid = () => {
  const { characters, error, isLoading } = useCharacters();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={10}
        p={5}>
        {isLoading &&
          skeletons.map((skeleton) => <CharacterCardSkeleton key={skeleton} />)}
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CharacterGrid;
