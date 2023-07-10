import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Character } from '../types';

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Card borderRadius='lg' overflow='hidden' boxShadow='lg'>
      <Image src={character.image} />
      <CardBody>
        <Heading as='h2' size='md'>
          {character.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
