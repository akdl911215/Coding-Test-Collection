import React, { useState, useCallback } from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate00_1.css';
import { useDispatch } from 'react-redux';
import { defaultChoice } from 'estimate/reducer/estimate.reducer';

const Estimate00_1 = () => {
    const [input, setInput] = useState({
        development: '',
        developmentValue: '',
    });

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const defaultBtn = (choice) => {
        console.log('choice :: ', choice);
        if (choice.input.appDevelopment) {
            console.log('choice.input.appDevelopment ::: ', choice.input.appDevelopment);
            const param = { app: choice.input.appDevelopment };
            dispatch(defaultChoice(param));
        }

        if (choice.input.wepDevelopment) {
            console.log('choice.input.wepDevelopment ::: ', choice.input.wepDevelopment);
            const param = { app: choice.input.wepDevelopment };
            dispatch(defaultChoice(param));
        }
    };
    // const defaultAppBtn = (e) => {};
    // const defaultWebBtn = (e) => {};

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
        defaultBtn();
        window.location.href = '/estimate01_1';
    };

    const preDefaultBtn = (e) => {
        window.location.href = '/home';
    };

    // https://cofs.tistory.com/270
    const doubleClickCheck = () => {
        var doubleClickPrevent = true;
        console.log('doubleClickPrevent ::: ', doubleClickPrevent);
        if (doubleClickPrevent) {
            console.log('if문 doubleClickPrevent :: ', doubleClickPrevent);
            setCount(count + 300);
            doubleClickPrevent = false;
            return doubleClickPrevent;
        } else {
            console.log('else doubleClickPrevent :: ', doubleClickPrevent);
            doubleClickPrevent = true;
            setCount(count - 300);
            return false;
        }
    };

    const appSetCount = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (doubleClickCheck()) {
            return;
        }
        alert('App 제작 + 300만원');
    };

    const webSetCount = () => {
        setCount(count + 400);

        if (doubleClickCheck()) return;
        alert('Wep 제작 + 400만원');
    };

    return (
        <>
            <h1>0단계, 어떤 서비스를 만들고 싶으신가요</h1>

            <h3>지금 설정한 금액 : {count}</h3>
            <div>
                <button type="button" className="defaultBtn00_1" name="development" value="developmentValue" onChange={handleChange} onClick={(e) => appSetCount(e)}>
                    <h1>App 개발</h1>
                    <h3>Android&IOS</h3>
                    <h1>300만원</h1>
                </button>
            </div>

            <div>
                <button type="button" className="defaultBtn00_1" name="development" value="developmentValue" onChange={handleChange} onClick={() => webSetCount()}>
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
