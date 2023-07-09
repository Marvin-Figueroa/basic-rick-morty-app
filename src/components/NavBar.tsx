import { HStack, Image, Show } from '@chakra-ui/react';
import LogoMobile from '../assets/logo-mobile.png';
import LogoDesktop from '../assets/logo-desktop.png';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='15px'>
      <Show below='lg'>
        <Image src={LogoMobile} alt='Logo' boxSize='60px' />
      </Show>
      <Show above='lg'>
        <Image src={LogoDesktop} alt='Logo' width='150px' />
      </Show>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
