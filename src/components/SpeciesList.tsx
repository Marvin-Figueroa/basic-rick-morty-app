import { List, Button, HStack, Image } from '@chakra-ui/react';
import { Species, species } from '../data/species';

interface Props {
  selectedSpecies: Species | null;
  onSelectSpecies: (species: Species) => void;
}

const SpeciesList = ({ selectedSpecies, onSelectSpecies }: Props) => {
  return (
    <List display='flex' flexDir='column' gap={4}>
      {species.map((speciesItem) => (
        <HStack key={speciesItem.id}>
          <Image borderRadius='lg' boxSize='50px' src={speciesItem.image} />
          <Button
            variant='link'
            fontSize='lg'
            onClick={() => onSelectSpecies(speciesItem)}
            fontWeight={
              selectedSpecies?.id === speciesItem.id ? 'bold' : 'normal'
            }
            color={
              selectedSpecies?.id === speciesItem.id
                ? 'blue.200'
                : 'currentcolor'
            }>
            {speciesItem.name}
          </Button>
        </HStack>
      ))}
    </List>
  );
};

export default SpeciesList;
