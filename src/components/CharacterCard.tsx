import { BsHeartPulseFill, BsQuestionCircle } from 'react-icons/bs';
import { FaGenderless, FaSkull } from 'react-icons/fa';
import { PiGenderMaleFill, PiGenderFemaleFill } from 'react-icons/pi';
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  Tooltip
} from '@chakra-ui/react';
import { Character } from '../types';
import { IconType } from 'react-icons';

const statusMap: { [key: string]: IconType } = {
  alive: BsHeartPulseFill as IconType,
  dead: FaSkull as IconType,
  unknown: BsQuestionCircle as IconType
};

const genderMap: { [key: string]: IconType } = {
  male: PiGenderMaleFill as IconType,
  female: PiGenderFemaleFill as IconType,
  genderless: FaGenderless as IconType,
  unknown: BsQuestionCircle as IconType
};

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Card height='100%'>
      <Image src={character.image} />
      <CardBody display='flex' flexDirection='column' gap='4'>
        <Heading as='h2' size='md'>
          {character.name}
        </Heading>
        <Text>{character.species}</Text>
        <HStack
          marginTop='auto'
          alignItems='center'
          justifyContent='space-between'>
          <Tooltip label={character.status} fontSize='md'>
            <span>
              <Icon
                boxSize='30px'
                color={
                  character.status === 'Dead'
                    ? 'red.500'
                    : character.status === 'unknown'
                    ? 'gray.500'
                    : 'green.500'
                }
                as={statusMap[character.status?.toLowerCase()]}
              />
            </span>
          </Tooltip>
          <Tooltip label={character.gender} fontSize='md'>
            <span>
              <Icon
                color={character.gender === 'Female' ? 'pink.500' : 'blue.500'}
                boxSize='30px'
                as={genderMap[character.gender?.toLowerCase()]}
              />
            </span>
          </Tooltip>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
