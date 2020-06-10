import React from 'react';
import styled from 'styled-components';

const CbTempleteBlock = styled.div`
    box-sizing: border-box;

    width: 512px;
    height: 768px;
    padding: 36px;
    
    position: relative;
    background: #FFF;
    border-radius: 16px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;
`;

function CbTemplete({ children }) {
    return (
        <CbTempleteBlock>
            {children}
        </CbTempleteBlock>
    );
}

export default CbTemplete;