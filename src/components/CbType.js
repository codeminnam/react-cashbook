import React from 'react';
import styled from 'styled-components';
import { useCbSetType } from '../CbContext';

const CbTypeBlock = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: right;
    border-bottom: 1px solid #AEB5BD;
    margin-bottom: 12px;

    span {
        margin: 0;
        font-size: 20px;
        color: #343a40;
    }

    select {
        padding: 5px;

        &:focus {
            outline: none;
        }
    }
`;

function CbType() {
    const setType = useCbSetType();
    const onSort = e => setType(e.target.value);
    return (
        <CbTypeBlock>
            <span>카테고리별로 보기: </span>
            <select onChange={onSort}>
                <option value='all'>전체</option>
                <option value='식사'>식사</option>
                <option value='문화'>문화</option>
                <option value='통신'>통신</option>
                <option value='선물'>선물</option>
            </select>
        </CbTypeBlock>
    );
}

export default CbType;