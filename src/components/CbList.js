import React from 'react';
import styled from 'styled-components';
import CbItem from './CbItem';

const CbListBlock = styled.div`
    flex: 1;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function CbList() {
    return (
        <CbListBlock>
            <CbItem />
            <CbItem />
            <CbItem />
            <CbItem />
            <CbItem />
        </CbListBlock>
    );
}

export default CbList;