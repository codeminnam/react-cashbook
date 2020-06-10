import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
    background: #0C8499;
    &:hover {
        background: #0C8499;
    }
    &:active {
        background: #0C8499;
    }

    z-index: 5;
    cursor: pointer;
    width: 70px;
    height: 70px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;

    position: absolute;
    right: -20px;
    bottom: 0;
    margin-bottom: 51px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: 0.125s all ease-in;
`;

function CbCreate() {
    return (
        <>
            <CircleButton>
                <MdAdd />
            </CircleButton>
        </>
    );
}

export default CbCreate;