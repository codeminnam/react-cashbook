import React, { createContext, useContext, useReducer, useRef, useState } from 'react';

const initialExpense = [
    {
        id: 1,
        type: '문화',
        text: 'WOODZ 앨범',
        price: 16000
    },
    {
        id: 2,
        type: '식사',
        text: '빙수',
        price: 12000
    },
    {
        id: 3,
        type: '선물',
        text: '강아지 간식',
        price: 7000
    },
    {
        id: 4,
        type: '통신',
        text: '휴대폰 납부액',
        price: 18000
    },
];

function cbReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.expense);
        case 'EDIT':
            return state.map(
                expense => expense.id === action.id ? { ...expense, text: action.text } : expense
            );
        case 'REMOVE':
            return state.filter(expense => expense.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const CbStateContext = createContext();
const CbDispatchContext = createContext();
const CbNextIdContext = createContext();
const CbTypeContext = createContext();
const CbSetTypeContext = createContext();

export function CbProvider({ children }) {
    const [state, dispatch] = useReducer(cbReducer, initialExpense);
    const [type, setType] = useState('all');
    const nextId = useRef(5);
    return (
        <CbStateContext.Provider value={state}>
            <CbDispatchContext.Provider value={dispatch}>
                <CbNextIdContext.Provider value={nextId}>
                    <CbTypeContext.Provider value={type}>
                        <CbSetTypeContext.Provider value={setType}>
                            {children}
                        </CbSetTypeContext.Provider>
                    </CbTypeContext.Provider>
                </CbNextIdContext.Provider>
            </CbDispatchContext.Provider>
        </CbStateContext.Provider>
    );
}

export function useCbState() {
    const context = useContext(CbStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbDispatch() {
    const context = useContext(CbDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbNextId() {
    const context = useContext(CbNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbType() {
    const context = useContext(CbTypeContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}


export function useCbSetType() {
    const context = useContext(CbSetTypeContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}