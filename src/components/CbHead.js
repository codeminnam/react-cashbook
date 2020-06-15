import React from 'react';
import styled from 'styled-components';
import { useCbState } from '../CbContext';

const CbHeadBlock = styled.div`
    padding-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #AEB5BD;
    
    h1 {
        margin: 0;
        font-size: 36px;
        color: #212529;
    }

    p {
        font-size: 20px;
    }

    strong {
        color: #E03231;
    }
`;

function CbHead() {
    const cashbook = useCbState();
    const sum = cashbook.map(expense => expense.price).reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <CbHeadBlock>
            <h1>오늘의 지출</h1>
            <p>{dateString}</p>
            <p>총 지출: <strong>-{sum}원</strong></p>
        </CbHeadBlock>
    );
}

export default CbHead;