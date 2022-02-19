import React from 'react';
import { GlobalStyle } from './pages/styles/global';
import { RoutesRender } from './routes/Routes';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RoutesRender />
    </React.Fragment>
  );
}

export default App;
