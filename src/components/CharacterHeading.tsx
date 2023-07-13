import { Heading } from '@chakra-ui/react';
import { CharacterQuery } from '../App';

interface Props {
  characterQuery: CharacterQuery;
}

const CharacterHeading = ({ characterQuery }: Props) => {
  const status =
    characterQuery.status !== 'All Statuses' &&
    characterQuery.status !== 'Unknown'
      ? characterQuery.status
      : '';

  const gender =
    characterQuery.gender !== 'All Genders' &&
    characterQuery.gender !== 'Unknown'
      ? characterQuery.gender
      : '';

  const heading = `${status || ''} ${gender || ''} ${
    characterQuery?.species?.name || 'Character'
  }s`;

  return <Heading as='h1'>{heading}</Heading>;
};

export default CharacterHeading;
