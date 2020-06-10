import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CbTemplete from './components/CbTemplete';
import CbHead from './components/CbHead';
import CbCategory from './components/CbCategory';
import CbCreate from './components/CbCreate';
import CbList from './components/CbList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #DFE2E6;
    font-weight: 700;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <CbTemplete>
        <CbHead />
        <CbCategory />
        <CbList />
        <CbCreate />
      </CbTemplete>
    </>
  );
}

export default App;
