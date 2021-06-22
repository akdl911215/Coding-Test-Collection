import React, { useState, useCallback, useEffect } from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate00_1.css';
import { useDispatch, useSelector } from 'react-redux';
import { defaultChoice, totalPriceResult } from 'estimate/reducer/estimate.reducer';
import { Link } from 'react-router-dom';

const Estimate00_1 = () => {
    const [input, setInput] = useState({
        name: [],
        value: [],
    });
    const [totalPrice, setTotalPrice] = useState(0);
    console.log('합산 금액 : ', totalPrice);
    const [appDoubleClickPrevent, setAppDoubleClicPrevent] = useState(false);
    const [wepDoubleClickPrevent, setWepDoubleClicPrevent] = useState(false);
    const dispatch = useDispatch();

    const handleChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            console.log('name :: ', name);
            console.log('value :: ', value);
            setInput({
                ...input,
                [name]: value,
            });
        },
        [input]
    );

    const nextDefaultBtn = (e) => {
        dispatch(totalPriceResult(totalPrice));
    };

    const appBooleanCheckBtn = () => {
        console.log('appDoubleClickPrevent ::: ', appDoubleClickPrevent);
        setAppDoubleClicPrevent((check: boolean) => !check);
        appDoubleClickCheck();
    };

    const appDoubleClickCheck = () => {
        if (appDoubleClickPrevent) {
            setTotalPrice(totalPrice - 300);
            return appDoubleClickPrevent;
        } else {
            setTotalPrice(totalPrice + 300);
            return false;
        }
    };

    const wepBooleanCheckBtn = () => {
        console.log('wepDoubleClickPrevent ::: ', wepDoubleClickPrevent);
        setWepDoubleClicPrevent((check: boolean) => !check);
        wepDoubleClickCheck();
    };

    const wepDoubleClickCheck = () => {
        if (wepDoubleClickPrevent) {
            setTotalPrice(totalPrice - 400);
            return wepDoubleClickPrevent;
        } else {
            setTotalPrice(totalPrice + 400);
            return false;
        }
    };

    // 버튼에 클릭이벤트 리스너 추가
    // 이벤트 내용으로 
    // 1. 쿼리셀렉터로 입력하고 원하는 태그 가져옴
    // 2. 태그에 따라서 innerHtml 혹은 value값으로 원하는 값을 준다

    return (
        <>
            <div>
                <h1>0단계, 어떤 서비스를 만들고 싶으신가요</h1>
                <h3>현재까지 설정한 금액 : {totalPrice}</h3>
            </div>

            <div>
                <button type="button" className="defaultBtn00_1" name="appDevelopment" value="App개발" onChange={handleChange} onClick={(e) => appBooleanCheckBtn(e)}>
                    <h1>App 개발</h1>
                    <h3>Android&IOS</h3>
                    <h1>300만원</h1>
                </button>
            </div>

            <div>
                <button type="button" className="defaultBtn00_1" name="wepDevelopment" value="Wep개발" onChange={handleChange} onClick={(e) => wepBooleanCheckBtn(e)}>
                    <h1>Wep 개발</h1>
                    <h3>반응형 웹</h3>
                    <h1>400만원</h1>
                </button>
            </div>

            <Link to="/">
                <button type="button" className="preDefaultBtn">
                    이전 단계
                </button>
            </Link>
            <Link to="/estimate01_1">
                <button type="button" className="nextDefaultBtn" onClick={(e) => nextDefaultBtn(e)}>
                    다음 단계
                </button>
            </Link>
        </>
    );
};
export default Estimate00_1;
