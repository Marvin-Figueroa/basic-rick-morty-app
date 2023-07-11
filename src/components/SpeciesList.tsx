import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Species, species } from '../data/species';

interface Props {
  selectedSpecie: Species | null;
  onSelectedSpecie: (specie: Species) => void;
}

const SpeciesList = ({ selectedSpecie, onSelectedSpecie }: Props) => {
  return (
    <VStack alignItems='flex-start'>
      {species.map((specie) => (
        <HStack key={specie.id}>
          <Image borderRadius='lg' boxSize='50px' src={specie.image} />
          <Text
            fontSize='lg'
            cursor='pointer'
            onClick={() => onSelectedSpecie(specie)}
            fontWeight={selectedSpecie?.id === specie.id ? 'bold' : 'normal'}
            color={
              selectedSpecie?.id === specie.id ? 'blue.200' : 'currentcolor'
            }>
            {specie.name}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default SpeciesList;
