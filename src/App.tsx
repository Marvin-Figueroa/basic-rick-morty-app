import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import CharacterGrid from './components/CharacterGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
      "sidebar main"`
      }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='sidebar'>Sidebar</GridItem>
      </Show>
      <GridItem area='main'>
        <CharacterGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

