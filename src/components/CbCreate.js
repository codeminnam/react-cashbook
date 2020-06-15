import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { lighten, darken } from 'polished';
import { useCbDispatch, useCbNextId, useCbEdit, useCbSetEdit } from '../CbContext';

const CircleButton = styled.button`
    background: #0C8499;
    &:hover {
        background: ${lighten(0.1, '#0C8499')};
    }
    &:active {
        background: ${darken(0.1, '#0c8499')};
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

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding: 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const Select = styled.select`
    &:focus {
        outline: none;
    }   
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    display: inline-block;
    width: 35%;
`;

const Button = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    color: #FFF;
    cursor: pointer;

    align-items: center;
    justify-content: center;

    background: #0C8499;
    &:hover {
        background: ${lighten(0.1, '#0C8499')};
    }
    &:active {
        background: ${darken(0.1, '#0c8499')};
        outline: none;
    }

    transition: 0.125s all ease-in;
`;

function CbCreate() {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('');
    const [text, setText] = useState('');
    const [price, setPrice] = useState(0);
    const nextId = useCbNextId();

    const edit = useCbEdit();
    const { mode: editMode, id: editId, type: editTypeData, text: editTextData, price: editPriceData } = edit;
    const [editType, setEditType] = useState(editTypeData);
    const [editText, setEditText] = useState(editTextData);
    const [editPrice, setEditPrice] = useState(editPriceData);
    const setEdit = useCbSetEdit();

    useEffect(() => {
        setEditType(editTypeData);
        setEditText(editTextData);
        setEditPrice(editPriceData);
    }, [editMode]);

    const onToggle = () => setOpen(!open);
    const onTypeChange = e => setType(e.target.value);
    const onTextChange = e => setText(e.target.value);
    const onPriceChange = e => setPrice(e.target.value);

    const onEditTypeChange = e => setEditType(e.target.value);
    const onEditTextChange = e => setEditText(e.target.value);
    const onEditPriceChange = e => setEditPrice(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            expense: {
                id: nextId.current,
                type: type,
                text: text,
                price: price
            }
        });
        setType('');
        setText('');
        setPrice(0);
        setOpen(false);
        nextId.current += 1;
    }

    const onEdit = e => {
        e.preventDefault();
        dispatch({
            type: 'EDIT',
            expense: {
                id: editId,
                type: editType,
                text: editText,
                price: editPrice
            }
        });
        setEdit({ ...edit, mode: false });
    }

    const dispatch = useCbDispatch();

    if (open && !editMode) {
        return (
            <InsertFormPositioner>
                <InsertForm onSubmit={onSubmit}>
                    <Select
                        onChange={onTypeChange}
                    >
                        <option value='--'>타입</option>
                        <option value='식사'>식사</option>
                        <option value='문화'>문화</option>
                        <option value='통신'>통신</option>
                        <option value='선물'>선물</option>
                    </Select>
                    <Input
                        type='text'
                        placeholder='지출내역'
                        onChange={onTextChange}
                    />
                    <Input
                        type='number'
                        min='0'
                        placeholder='지출비용'
                        onChange={onPriceChange}
                    />
                    <Button><FaCheck /></Button>
                </InsertForm>
            </InsertFormPositioner>
        );
    } else if (editMode) {
        return (
            <InsertFormPositioner>
                <InsertForm onSubmit={onEdit}>
                    <Select
                        onChange={onEditTypeChange}
                        value={editType}
                    >
                        <option value='--'>타입</option>
                        <option value='식사'>식사</option>
                        <option value='문화'>문화</option>
                        <option value='통신'>통신</option>
                        <option value='선물'>선물</option>
                    </Select>
                    <Input
                        type='text'
                        placeholder='지출내역'
                        value={editText}
                        onChange={onEditTextChange}
                    />
                    <Input
                        type='number'
                        min='0'
                        placeholder='지출비용'
                        value={editPrice}
                        onChange={onEditPriceChange}
                    />
                    <Button><FaCheck /></Button>
                </InsertForm>
            </InsertFormPositioner>
        );
    } else {
        return (
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd />
            </CircleButton>
        );
    }

    // return (
    //     <>
    //         {open ?
    //             (
    //                 <InsertFormPositioner>
    //                     <InsertForm onSubmit={onSubmit}>
    //                         <Select
    //                             onChange={onTypeChange}
    //                         >
    //                             <option value='--'>타입</option>
    //                             <option value='식사'>식사</option>
    //                             <option value='문화'>문화</option>
    //                             <option value='통신'>통신</option>
    //                             <option value='선물'>선물</option>
    //                         </Select>
    //                         <Input
    //                             type='text'
    //                             placeholder='지출내역'
    //                             onChange={onTextChange}
    //                         />
    //                         <Input
    //                             type='number'
    //                             min='0'
    //                             placeholder='지출비용'
    //                             onChange={onPriceChange}
    //                         />
    //                         <Button><FaCheck /></Button>
    //                     </InsertForm>
    //                 </InsertFormPositioner>
    //             ) : (
    //                 <CircleButton open={open} onClick={onToggle}>
    //                     <MdAdd />
    //                 </CircleButton>
    //             )
    //         }
    //     </>
    // );
}

export default CbCreate;