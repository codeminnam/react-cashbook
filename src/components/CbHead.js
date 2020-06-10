import React from 'react';
import styled from 'styled-components';

const CbHeadBlock = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #AEB5BD;
    font-weight: 700;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #212529;
    }

    strong {
        color: #E03231;
    }

`;

function CbHead() {

    return (
        <CbHeadBlock>
            <h1>오늘의 지출</h1>
            <p>2020년 3월 8일</p>
            <p>총 지출: <strong>-139000원</strong></p>
        </CbHeadBlock>
    );
}

export default CbHead;