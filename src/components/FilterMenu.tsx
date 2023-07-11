import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
  selectedOption: string | undefined;
  onSelectOption: (option: string) => void;
  filterOptions: string[];
}

const FilterMenu = ({
  selectedOption,
  onSelectOption,
  filterOptions
}: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedOption}
      </MenuButton>
      <MenuList>
        {filterOptions.map((option) => (
          <MenuItem onClick={() => onSelectOption(option)} key={option}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterMenu;
