import React from 'react';
import styled from 'styled-components';

const CbTempleteBlock = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: 512px;
    height: 768px;
    padding: 36px;
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    border-radius: 16px;
    
    position: relative;

    background: #FFF;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
`;

function CbTemplete({ children }) {
    return (
        <CbTempleteBlock>
            {children}
        </CbTempleteBlock>
    );
}

export default CbTemplete;