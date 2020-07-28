import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { lighten, darken } from 'polished';
import { useCbSetMode, useCbNextId } from '../CbContext';

const CircleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 70px;
    margin-bottom: 51px;
    border: none;
    border-radius: 50%;
    outline: none;

    position: absolute;
    right: -20px;
    bottom: 0;
    transform: translate(-50%, 50%);

    font-size: 60px;
    color: white;
    cursor: pointer;

    background: #0C8499;
    &:hover {
        background: ${lighten(0.1, '#0C8499')};
    }
    &:active {
        background: ${darken(0.1, '#0c8499')};
    }

    transition: 0.125s all ease-in;
`;

function CbCreateButton() {
    const setMode = useCbSetMode();
    const nextId = useCbNextId();

    const onCreate = () => setMode({
        modeName: 'create',
        expense: {
            id: nextId.current,
            type: '',
            text: '',
            price: 0
        }
    });

    return (
        <CircleButton onClick={onCreate}>
            <MdAdd />
        </CircleButton>
    );
}

export default CbCreateButton;