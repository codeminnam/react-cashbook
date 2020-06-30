import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { useCbDispatch, useCbNextId, useCbMode, useCbSetMode } from '../CbContext';
import { lighten, darken } from 'polished';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props => props.disappear && css`
    animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
    width: 370px;
    padding: 1.5rem;
    background: white;
    border-radius: 4px;

    h1 {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    h2 {
        margin-top: 0.2em;
        margin-bottom: 0.2em;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

     ${props => props.disappear && css`
        animation-name: ${slideDown};
    `}
`;

const InsertForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 12px;
`;

const Input = styled.input`
    box-sizing: border-box;
    display: block;

    width: 100%;
    padding: 12px;  
    margin-bottom: 20px;
    border: 1px solid #9B9B9B;
    border-radius: 4px;
    outline: none;
    font-size: 18px;
`;

const Select = styled.select`
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #9B9B9B;
    border-radius: 4px;
    
    &:focus {
        outline: none;
    }   
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

const Button = styled.button`
    align-items: center;
    justify-content: center;
    
    padding: 12px 24px;
    border: none;
    border-radius: 4px;

    font-size: 18px;
    font-weight: 700;
    color: #FFF;
    cursor: pointer;

    ${props => {
        const selected = props.theme.palette[props.color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
                outline: none;
            }
        `;
    }}

    transition: 0.125s all ease-in;

    &+& {
        margin-left: 10px;
    }
`;

function CbDialog() {
    const mode = useCbMode();
    const setMode = useCbSetMode();
    const { modeName, expense: { id: modeId, type: modeTypeData, text: modeTextData, price: modePriceData } } = mode;
    const nextId = useCbNextId();
    const dispatch = useCbDispatch();

    const [type, setType] = useState(modeTypeData);
    const [text, setText] = useState(modeTextData);
    const [price, setPrice] = useState(modePriceData);

    // const [animate, setAnimate] = useState(false);
    // const visible = !(modeName === 'none');
    // const [localVisible, setLocalVisible] = useState(visible);

    // useEffect(() => {
    //     if (localVisible && !visible) {
    //         setAnimate(true);
    //         setTimeout(() => setAnimate(false), 1000);
    //     }
    //     setLocalVisible(visible);
    // }, [localVisible, visible]);

    useEffect(() => {
        setType(modeTypeData);
        setText(modeTextData);
        setPrice(modePriceData);
    }, [mode]);

    const onTypeChange = e => setType(e.target.value);
    const onTextChange = e => setText(e.target.value);
    const onPriceChange = e => setPrice(e.target.value);

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
        nextId.current += 1;
        setMode({ ...mode, modeName: 'none' });
    }

    const onEdit = e => {
        e.preventDefault();
        dispatch({
            type: 'EDIT',
            expense: {
                id: modeId,
                type: type,
                text: text,
                price: price
            }
        });
        setMode({ ...mode, modeName: 'none' });
    }

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id: modeId
        });
        setMode({ ...mode, modeName: 'none' });
    }

    const onCancel = () => {
        setMode({ ...mode, modeName: 'none' });
    }

    if (modeName === 'none') {
        return null;
    } else if (modeName === 'create') {
        return (
            <>
                <ThemeProvider
                    theme={{
                        palette: {
                            gray: '#484F58',
                            blue: '#3A5BDB'
                        }
                    }}
                >
                    <DarkBackground>
                        <DialogBlock>
                            <h1>지출 등록</h1>
                            <InsertForm onSubmit={onSubmit}>
                                <h2>내용</h2>
                                <Input
                                    type='text'
                                    onChange={onTextChange}
                                />
                                <h2>금액</h2>
                                <Input
                                    type='number'
                                    min='0'
                                    value={price}
                                    onChange={onPriceChange}
                                />
                                <h2>카테고리</h2>
                                <Select
                                    onChange={onTypeChange}
                                >
                                    <option value='--'>타입</option>
                                    <option value='식사'>식사</option>
                                    <option value='문화'>문화</option>
                                    <option value='통신'>통신</option>
                                    <option value='선물'>선물</option>
                                </Select>
                                <ButtonGroup>
                                    <Button color='gray' onClick={onCancel}>취소</Button>
                                    <Button color='blue' type='submit'>등록</Button>
                                </ButtonGroup>
                            </InsertForm>
                        </DialogBlock>
                    </DarkBackground>
                </ThemeProvider>
            </>
        );
    } else if (modeName === 'edit') {
        return (
            <>
                <ThemeProvider
                    theme={{
                        palette: {
                            gray: '#484F58',
                            blue: '#3A5BDB'
                        }
                    }}
                >
                    <DarkBackground>
                        <DialogBlock>
                            <h1>지출 등록</h1>
                            <InsertForm onSubmit={onEdit}>
                                <h2>내용</h2>
                                <Input
                                    type='text'
                                    value={text}
                                    onChange={onTextChange}
                                />
                                <h2>금액</h2>
                                <Input
                                    type='number'
                                    min='0'
                                    value={price}
                                    onChange={onPriceChange}
                                />
                                <h2>카테고리</h2>
                                <Select
                                    onChange={onTypeChange}
                                    value={type}
                                >
                                    <option value='--'>타입</option>
                                    <option value='식사'>식사</option>
                                    <option value='문화'>문화</option>
                                    <option value='통신'>통신</option>
                                    <option value='선물'>선물</option>
                                </Select>
                                <ButtonGroup>
                                    <Button color='gray' onClick={onCancel}>취소</Button>
                                    <Button color='blue' type='submit'>수정</Button>
                                </ButtonGroup>
                            </InsertForm>
                        </DialogBlock>
                    </DarkBackground>
                </ThemeProvider>
            </>
        );
    } else if (modeName === 'remove') {
        return (
            <>
                <ThemeProvider
                    theme={{
                        palette: {
                            gray: '#474E57',
                            pink: '#E64981'
                        }
                    }}
                >
                    <DarkBackground>
                        <DialogBlock>
                            <h1>정말 삭제하시겠습니까?</h1>
                            <ButtonGroup>
                                <Button color='gray'>취소</Button>
                                <Button color='pink' onClick={onRemove}>삭제</Button>
                            </ButtonGroup>
                        </DialogBlock>
                    </DarkBackground>
                </ThemeProvider>
            </>
        );
    }
}

export default CbDialog;