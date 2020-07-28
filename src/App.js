import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { CbProvider } from './CbContext';
import CbTemplete from './components/CbTemplete';
import CbHead from './components/CbHead';
import CbType from './components/CbType';
import CbList from './components/CbList';
import CbCreateButton from './components/CbCreateButton';
import CbDialog from './components/CbDialog';
const GlobalStyle = createGlobalStyle`
  body {
    background: #DFE2E6;
    font-weight: 700;
  }
`;

function App() {
  return (
    <CbProvider>
      <GlobalStyle />
      <CbTemplete>
        <CbHead />
        <CbType />
        <CbList />
        <CbCreateButton />
      </CbTemplete>
      <CbDialog />
    </CbProvider>
  );
}

export default App;
