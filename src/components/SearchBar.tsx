import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface Props {
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <Box flexGrow={1} maxWidth='600px' margin='0 auto'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchRef?.current?.value);

          onSearch(searchRef?.current?.value || '');
        }}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <FaMagnifyingGlass />
          </InputLeftElement>
          <Input
            onChange={(e) => {
              if (e.target.value.trim().length === 0) {
                onSearch('');
              }
            }}
            ref={searchRef}
            size='md'
            borderRadius='full'
            type='search'
            placeholder='Search characters...'
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBar;
