import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const CharacterCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius='lg' overflow='hidden' boxShadow='xl'>
      {children}
    </Box>
  );
};

export default CharacterCardContainer;
