import React, { useEffect, useState, useCallback } from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate01_1.css';
import { useDispatch, useSelector } from 'react-redux';
import { totalPriceResult } from 'estimate/reducer/estimate.reducer';
import { Link } from 'react-router-dom';

const Estimate01_1 = () => {
    const totalPriceValue = useSelector((state) => state.estimates.totalPrice);

    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);

    const [planExits, setPlanExits] = useState(false);
    const [nonPlanExits, setNonPlanExits] = useState(false);
    const [inputStatus, setInputStatus] = useState('');
    const [booleanInput, setBooleanInput] = useState(true);

    const handleClickRadioButton = useCallback(
        (radioBtnName) => {
            console.log('radioBtnName ::::: ', radioBtnName);
            setBooleanInput((check: boolean) => !check);
            console.log('booleanInput :::: ==  ', booleanInput);

            if (booleanInput === true) {
                // planBooleanCheckBtn();
            }

            if (booleanInput === false) {
                // nonPlanBooleanCheckBtn();
            }
            setInputStatus(radioBtnName);
        },
        [inputStatus]
    );

    const nextDefaultBtn = (e) => {
        const sumPrice = totalPrice;
        dispatch(totalPriceResult(sumPrice));
    };

    const planBooleanCheckBtn = () => {
        setPlanExits((check: boolean) => !check);
        planExitsDoubleClickCheck();
    };

    const planExitsDoubleClickCheck = () => {
        if (planExits) {
            setTotalPrice(totalPrice - 50);
            return planExits;
        } else {
            setTotalPrice(totalPrice + 50);
            return false;
        }
    };

    const nonPlanBooleanCheckBtn = () => {
        setNonPlanExits((check: boolean) => !check);
        nonPlanExitsDoubleClickCheck();
    };

    const nonPlanExitsDoubleClickCheck = () => {
        if (nonPlanExits) {
            setTotalPrice(totalPrice - 100);
            return nonPlanExits;
        } else {
            setTotalPrice(totalPrice + 100);
            return false;
        }
    };

    return (
        <>
            <div>
                <h1>1단계, 먼저 개발범위를 먼저 생각해보아요.</h1>
                <h2>개발범위로 기본금액을 정할 수 있어요</h2>
                <br />
                <br />
                <h2>01.상세 기획이 있나요?</h2>
                <h3>아직 상세 기획 없이 단순 아이디어만 있어도 걱정하지 마세요!</h3>
                <h3>티릴리와 함께 더 멋진 기획을 만들 수 있습니다!</h3>
                <br />
                <br />
                <h3>현재 페이지의 합산금액 : {totalPrice}</h3>
                <h3>이전 페이지까지의 합산금액 : {totalPriceValue}</h3>
            </div>

            <label type="radio" id="planExitsRadio" checked={inputStatus === 'planExitsRadio'} onClick={() => handleClickRadioButton('planExitsRadio')}>
                <button type="button" className="defaultBtn01_1" name="developmentCheck" onClick={() => planBooleanCheckBtn()}>
                    <h1>네! 상세 기획이 있어요.</h1>
                    <h3>좋아요! 개발을 위한 기획을 함께 진행해요.</h3>
                    <h1>+50만원</h1>
                </button>
            </label>

            <label type="radio" id="nonPlanExitsRadio" checked={inputStatus === 'nonPlanExitsRadio'} onClick={() => handleClickRadioButton('nonPlanExitsRadio')}>
                <button type="button" className="defaultBtn01_1" name="developmentCheck" onClick={() => nonPlanBooleanCheckBtn()}>
                    <h1>앗..아직 상세 기획이 없어요.</h1>
                    <h3>괜찮아요~ 티릴리와 함께 서비스를 기획해보아요.</h3>
                    <h1>+100만원</h1>
                </button>
            </label>

            <Link to="/estimate00_1">
                <button type="button" className="preDefaultBtn">
                    이전 단계
                </button>
            </Link>

            <Link to="/estimate01_2">
                <button type="button" className="nextDefaultBtn" onClick={(e) => nextDefaultBtn(e)}>
                    다음 단계
                </button>
            </Link>
        </>
    );
};
export default Estimate01_1;
