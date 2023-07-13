import { Heading, SimpleGrid } from '@chakra-ui/react';
import CharacterCard from './CharacterCard';
import CharacterCardSkeleton from './CharacterCardSkeleton';
import CharacterCardContainer from './CharacterCardContainer';
import useCharacters from '../hooks/useCharacters';
import { CharacterQuery } from '../App';

interface Props {
  characterQuery: CharacterQuery;
}

const CharacterGrid = ({ characterQuery }: Props) => {
  const { data: characters, isLoading, error } = useCharacters(characterQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log('isLoading', isLoading);
  console.log('characters', characters);
  console.log('error', error);

  if (!isLoading && (error || characters.length === 0)) {
    return (
      <Heading color='blue.200' size='lg' mt='100px'>
        No results found 😔
      </Heading>
    );
  }

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
