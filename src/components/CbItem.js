import React from 'react';
import styled from 'styled-components';
import { useCbDispatch, useCbSetEdit } from '../CbContext';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { lighten } from 'polished';

const handleTypeColor = type => {
    switch (type) {
        case '식사':
            return '#FFEC99';
        case '문화':
            return '#D8F6A3';
        case '통신':
            return '#FFD8A8';
        case '선물':
            return '#DF95F1';
        default:
            return '#75C1FC';
    }
}

const TypeTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 20px;
    margin-right: 20px;
    border-radius: 8px;

    font-size: 20px;
    font-weight: 400;

    background: ${({ type }) => handleTypeColor(type)};   
`;

const Text = styled.div`
    flex: 1;
    font-size: 20px;
    color: #484F58;
`;

const Price = styled.div` 
    margin-right: 20px;
    font-size: 20px;
    color: #E03231;  
`;

const Edit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    
    color: #000;
    font-size: 24px;
    cursor: pointer;
    
    opacity: 1;
    &:hover {
        color: ${lighten(0.4, '#000')};
    }

    transition: 0.125s all ease-in;
`;

const Remove = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    color: #000;
    cursor: pointer;

    opacity: 1;
    &:hover {
        color: ${lighten(0.4, '#000')};
    }

    transition: 0.125s all ease-in;
`;

const CbItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottm: 12px;
`;

function CbItem({ id, type, text, price }) {
    const dispatch = useCbDispatch();
    const setEdit = useCbSetEdit();

    const onEdit = () => setEdit({
        mode: true,
        id,
        type,
        text,
        price
    });

    const onRemove = () => dispatch({
        type: 'REMOVE',
        id
    });

    return (
        <CbItemBlock id={id}>
            <TypeTag type={type}>
                {type ? type : '--'}
            </TypeTag>
            <Text text={text} type={type}> {text ? text : '--'} </Text>
            <Price price={price}> -{price ? price : 0}원 </Price>
            <Edit onClick={onEdit}>
                <FaPen />
            </Edit>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </CbItemBlock>
    );
}

export default CbItem;