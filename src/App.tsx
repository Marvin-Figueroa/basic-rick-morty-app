import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
      "sidebar main"`
      }}>
      <GridItem bg='gold' area={'nav'}>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem bg='blueviolet' area={'sidebar'}>
          Sidebar
        </GridItem>
      </Show>
      <GridItem bg='tomato' area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

