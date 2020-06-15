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
            return state.map(expense => expense.id === action.expense.id ? {
                ...expense,
                type: action.expense.type,
                text: action.expense.text,
                price: action.expense.price
            } : expense
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
const CbEditContext = createContext();
const CbSetEditContext = createContext();

export function CbProvider({ children }) {
    const [state, dispatch] = useReducer(cbReducer, initialExpense);
    const [type, setType] = useState('all');
    const [edit, setEdit] = useState({ mode: false, id: '0', type: '', text: '', price: 0 });
    const nextId = useRef(5);
    return (
        <CbStateContext.Provider value={state}>
            <CbDispatchContext.Provider value={dispatch}>
                <CbNextIdContext.Provider value={nextId}>
                    <CbTypeContext.Provider value={type}>
                        <CbSetTypeContext.Provider value={setType}>
                            <CbEditContext.Provider value={edit}>
                                <CbSetEditContext.Provider value={setEdit}>
                                    {children}
                                </CbSetEditContext.Provider>
                            </CbEditContext.Provider>
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

export function useCbEdit() {
    const context = useContext(CbEditContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useCbSetEdit() {
    const context = useContext(CbSetEditContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}