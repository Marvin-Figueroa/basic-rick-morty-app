import { HStack, Image, Show } from '@chakra-ui/react';
import LogoMobile from '../assets/logo-mobile.png';
import LogoDesktop from '../assets/logo-desktop.png';

function NavBar() {
  return (
    <HStack>
      <Show below='lg'>
        <Image src={LogoMobile} alt='Logo' boxSize='60px' />
      </Show>
      <Show above='lg'>
        <Image src={LogoDesktop} alt='Logo' width='150px' />
      </Show>
    </HStack>
  );
}

export default NavBar;
