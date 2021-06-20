import React from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate00_1.css';

const Estimate00_1 = () => {
    const defaultAppBtn = (e) => {};

    const defaultWebBtn = (e) => {};

    const nextDefaultBtn = (e) => {
        window.location.href = '/estimate01_1';
    };

    const preDefaultBtn = (e) => {
        window.location.href = '/';
    };

    return (
        <>
            <h1>0단계, 어떤 서비스를 만들고 싶으신가요</h1>

            <div>
                <button type="button" className="defaultBtn00_1" onClick={(e) => defaultAppBtn(e)}>
                    <h1>App 개발</h1>
                    <h3>Android&IOS</h3>
                    <h1>300만원</h1>
                </button>
            </div>

            <div>
                <button type="button" className="defaultBtn00_1" onClick={(e) => defaultWebBtn(e)}>
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
