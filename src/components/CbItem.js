import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

const CategoryTag = styled.div`
    padding: 16px 20px;
    font-size: 20px;
    font-weight: 400;

    background: #FFEC99;
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #484F58;
`;

const Price = styled.div` 
    font-size: 21px;
    color: #E03231;
    margin-right: 20px;
`;

const Edit = styled.div`
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 24px;
    margin-right: 12px;
    cursor: pointer;
`;

const Remove = styled.div`
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 30px;
    cursor: pointer;
`;

const CbItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottm: 12px;
`;

function CbItem() {
    return (
        <CbItemBlock>
            <CategoryTag>
                식사
            </CategoryTag>
            <Text> 용개반점 </Text>
            <Price> -7000원 </Price>
            <Edit>
                <FaPen />
            </Edit>
            <Remove>
                <MdDelete />
            </Remove>
        </CbItemBlock>
    );
}

export default CbItem;