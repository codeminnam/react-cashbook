import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { CbProvider } from './CbContext';
import CbTemplete from './components/CbTemplete';
import CbHead from './components/CbHead';
import CbType from './components/CbType';
import CbList from './components/CbList';
import CbCreate from './components/CbCreate';

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
