import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import BackButton from '_TestCode/buttonTest/BackButton';

const RadioBtn3 = ({ history }) => {
    const [inputStatus, setInputStatus] = useState('');

    const handleBackList = useCallback(() => {
        const params = {
            pathname: '/',
        };
        history.push(params);
    }, [history]);

    const handleClickRadioButton = useCallback(
        (radioBtnName) => {
            setInputStatus(radioBtnName);
        },
        [inputStatus]
    );

    return (
        <>
            <BackButton onClick={handleBackList} />

            <RadioBtnContainer>
                <RadioBtnBox>
                    <RadioBtn type="radio" id="radio" checked={inputStatus === 'radio'} onClick={() => handleClickRadioButton('radio')} />
                    <label htmlFor="radio">Radio</label>
                </RadioBtnBox>

                <RadioBtnBox>
                    <RadioBtn type="radio" id="radio1" checked={inputStatus === 'radio1'} onClick={() => handleClickRadioButton('radio1')} />
                    <label htmlFor="radio1">Radio1</label>
                </RadioBtnBox>

                <RadioBtnBox>
                    <RadioBtn type="radio" id="radio2" checked={inputStatus === 'radio2'} onClick={() => handleClickRadioButton('radio2')} />
                    <label htmlFor="radio2">Radio2</label>
                </RadioBtnBox>

                <RadioBtnBox>
                    <RadioBtn type="radio" id="radio3" checked={inputStatus === 'radio3'} onClick={() => handleClickRadioButton('radio3')} />
                    <label htmlFor="radio3">Radio3</label>
                </RadioBtnBox>
            </RadioBtnContainer>

            <StateValue> state value : {inputStatus} </StateValue>
        </>
    );
};

export default React.memo(RadioBtn3);

const RadioBtnContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;

    @media (max-width: 400px) {
        width: 100%;
        max-width: 400px;
        justify-content: start;
        flex-wrap: wrap;
    }
`;

const RadioBtnBox = styled.div`
    margin: 0 5px;
    display: flex;
    align-items: center;
    font-size: 20px;
`;

const RadioBtn = styled.input``;

const StateValue = styled.h1`
    text-align: center;
    font-size: 50px;

    @media (max-width: 400px) {
        text-align: left;
        font-size: 28px;
    }
`;
