import React from 'react';
import styled from 'styled-components';
import { useCbState, useCbType } from '../CbContext';
import CbItem from './CbItem';

const CbListBlock = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-bottom: 48px;
`;

function CbList() {
    const cashbook = useCbState();
    const type = useCbType();

    if (type === 'all' || type === '') {
        return (
            <CbListBlock>
                {cashbook.map(
                    expense => <CbItem
                        key={expense.id}
                        id={expense.id}
                        type={expense.type}
                        text={expense.text}
                        price={expense.price}
                    />
                )}
            </CbListBlock>
        );
    } else {
        return (
            <CbListBlock>
                {cashbook
                    .filter(expense => expense.type === type)
                    .map(
                        expense => <CbItem
                            key={expense.id}
                            id={expense.id}
                            type={expense.type}
                            text={expense.text}
                            price={expense.price}
                        />
                    )}
            </CbListBlock>
        );
    }
}

export default CbList;