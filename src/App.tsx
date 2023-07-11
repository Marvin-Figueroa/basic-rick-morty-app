import { Grid, GridItem, Heading, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CharacterGrid from './components/CharacterGrid';
import SpeciesList from './components/SpeciesList';
import { Species } from './data/species';
import { useState } from 'react';

function App() {
  const [selectedSpecie, setSelectedSpecie] = useState<Species | null>(null);

  const handleSelectedSpecies = (species: Species | null) => {
    setSelectedSpecie(species);
    console.log('selected species', species);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
      "sidebar main"`
      }}
      padding={4}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='sidebar'>
          <Heading as='h2' size='lg' mb={5} textAlign='left'>
            Species
          </Heading>
          <SpeciesList
            selectedSpecie={selectedSpecie}
            onSelectedSpecie={handleSelectedSpecies}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <CharacterGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

