import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CbTemplete from './components/CbTemplete';
import CbHead from './components/CbHead';
import CbCreate from './components/CbCreate';
import CbList from './components/CbList';
import { CbProvider } from './CbContext';
import CbType from './components/CbType';

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
        <CbCreate />
      </CbTemplete>
    </CbProvider>
  );
}

export default App;
