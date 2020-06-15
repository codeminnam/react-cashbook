import React from 'react';
import styled from 'styled-components';
import CbItem from './CbItem';
import { useCbState, useCbType } from '../CbContext';

const CbListBlock = styled.div`
    flex: 1;
    padding-bottom: 48px;
    overflow-y: auto;
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