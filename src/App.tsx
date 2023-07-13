import { Grid, GridItem, HStack, Heading, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CharacterGrid from './components/CharacterGrid';
import SpeciesList from './components/SpeciesList';
import { Species } from './data/species';
import { useState } from 'react';
import FilterMenu from './components/FilterMenu';
import CharacterHeading from './components/CharacterHeading';

export interface CharacterQuery {
  species?: Species | null;
  gender?: string;
  status?: string;
  name?: string;
}

function App() {
  const [characterQuery, setCharacterQuery] = useState<CharacterQuery>({
    gender: 'All Genders',
    status: 'All Statuses'
  });

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '250px 1fr' }}
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav"
      "sidebar main"`
      }}
      padding={4}
      gap={6}>
      <GridItem area='nav'>
        <NavBar
          onSearch={(searchTerm) =>
            setCharacterQuery({ ...characterQuery, name: searchTerm })
          }
        />
      </GridItem>
      <Show above='md'>
        <GridItem area='sidebar'>
          <Heading as='h2' size='lg' mb={5} textAlign='left'>
            Species
          </Heading>
          <SpeciesList
            selectedSpecies={characterQuery.species}
            onSelectSpecies={(species) =>
              setCharacterQuery({ ...characterQuery, species })
            }
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <CharacterHeading characterQuery={characterQuery} />
        <HStack marginY={5} spacing={5}>
          <FilterMenu
            selectedOption={characterQuery.gender}
            onSelectOption={(gender) =>
              setCharacterQuery({ ...characterQuery, gender })
            }
            filterOptions={[
              'All Genders',
              'Male',
              'Female',
              'Unknown',
              'Genderless'
            ]}
          />
          <FilterMenu
            selectedOption={characterQuery.status}
            onSelectOption={(status) =>
              setCharacterQuery({ ...characterQuery, status })
            }
            filterOptions={['All Statuses', 'Alive', 'Dead', 'Unknown']}
          />
        </HStack>
        <CharacterGrid characterQuery={characterQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

