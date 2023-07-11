import { Box, HStack, Icon, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Box boxSize={8} as={Icon} onClick={toggleColorMode} cursor='pointer'>
        {colorMode === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
