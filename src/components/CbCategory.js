import React from 'react';
import styled from 'styled-components';

const CbCategoryBlock = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: right;
    border-bottom: 1px solid #AEB5BD;
    margin-bottom: 12px;

    p {
        margin: 0;
        font-size: 18px;
        color: #343a40;
    }

    select {
        padding: 5px;
    }

`;

function CbCategory() {

    return (
        <CbCategoryBlock>
            <span>카테고리별로 보기: </span>
            <select>
                <option>전체</option>
            </select>
        </CbCategoryBlock>
    );
}

export default CbCategory;