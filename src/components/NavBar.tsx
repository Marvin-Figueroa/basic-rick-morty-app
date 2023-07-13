import { HStack, Image, Show } from '@chakra-ui/react';
import LogoMobile from '../assets/logo-mobile.png';
import LogoDesktop from '../assets/logo-desktop.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchBar from './SearchBar';

interface Props {
  onSearch: (search: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack
      alignItems='center'
      gap={4}
      justifyContent='space-between'
      padding='15px'>
      <Show below='lg'>
        <Image src={LogoMobile} alt='Logo' boxSize='60px' />
      </Show>
      <Show above='lg'>
        <Image src={LogoDesktop} alt='Logo' width='150px' />
      </Show>
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
