import React from 'react';
import { GlobalStyle } from './pages/styles/global';
import { RoutesRender } from './routes/Routes';
import { PetSelection } from './context/PetSelectionContext';

function App() {
  return (
    <React.Fragment>
      <PetSelection>
        <GlobalStyle />
        <RoutesRender />
      </PetSelection>
    </React.Fragment>
  );
}

export default App;
