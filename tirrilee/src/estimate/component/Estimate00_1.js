import React, { useState, useCallback } from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate00_1.css';
import { useDispatch } from 'react-redux';
import { defaultChoice } from 'estimate/reducer/estimate.reducer';

const Estimate00_1 = () => {
    const [input, setInput] = useState({
        name: [],
        value: [],
    });
    const [totalPrice, setTotalPrice] = useState(0);
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

    const defaultBtn = () => {
        const param = { name: input.name, value: input.value, totalPrice: totalPrice };
        dispatch(param);
    };

    const nextDefaultBtn = (e) => {
        defaultBtn();
        window.location.href = '/estimate01_1';
    };

    const preDefaultBtn = (e) => {
        window.location.href = '/home';
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

    return (
        <>
            <h1>0단계, 어떤 서비스를 만들고 싶으신가요</h1>

            <h3>선택한 타입 이름 : {input.name}</h3>
            <h3>선택한 타입 값 : {input.value}</h3>
            <h3>지금 설정한 금액 : {totalPrice}</h3>
            <div>
                <button type="button" className="defaultBtn00_1" name="appDevelopment" value="App개발" onChange={handleChange} onClick={(e) => appBooleanCheckBtn(e)}>
                    <h1>App 개발</h1>
                    <h3>Android&IOS</h3>
                    <h1>300만원</h1>
                </button>
            </div>

            <div>
                <button type="button" className="defaultBtn00_1" name="wepDevelopment" value="Wep개발" onChange={handleChange} onClick={() => wepBooleanCheckBtn()}>
                    <h1>Wep 개발</h1>
                    <h3>반응형 웹</h3>
                    <h1>400만원</h1>
                </button>
            </div>

            <button type="button" className="preDefaultBtn" onClick={(e) => preDefaultBtn(e)}>
                이전 단계
            </button>
            <button type="button" className="nextDefaultBtn" onClick={(e) => nextDefaultBtn(e)}>
                다음 단계
            </button>
        </>
    );
};
export default Estimate00_1;
