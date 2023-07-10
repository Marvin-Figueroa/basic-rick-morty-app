import { SimpleGrid } from '@chakra-ui/react';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from './CharacterCard';

const CharacterGrid = () => {
  const { characters, error, isLoading } = useCharacters();
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }}
      spacing={10}
      p={5}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </SimpleGrid>
  );
};

export default CharacterGrid;
