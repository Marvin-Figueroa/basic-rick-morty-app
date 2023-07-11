import { Grid, GridItem, HStack, Heading, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CharacterGrid from './components/CharacterGrid';
import SpeciesList from './components/SpeciesList';
import { Species } from './data/species';
import { useState } from 'react';
import FilterMenu from './components/FilterMenu';

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [selectedGender, setSelectedGender] = useState('All Genders');

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
        <NavBar />
      </GridItem>
      <Show above='md'>
        <GridItem area='sidebar'>
          <Heading as='h2' size='lg' mb={5} textAlign='left'>
            Species
          </Heading>
          <SpeciesList
            selectedSpecies={selectedSpecies}
            onSelectSpecies={(species) => setSelectedSpecies(species)}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack marginBottom={5} spacing={5}>
          <FilterMenu
            selectedOption={selectedGender}
            onSelectOption={(gender) => setSelectedGender(gender)}
            filterOptions={[
              'All Genders',
              'Male',
              'Female',
              'Unknown',
              'Genderless'
            ]}
          />
        </HStack>
        <CharacterGrid
          selectedGender={selectedGender}
          selectedSpecies={selectedSpecies}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

