import React from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate02_1.css';

const Estimate02_1 = () => {
    const defaultPrice = (e) => {};

    const defaultPriceTwice = (e) => {};

    const preDefaultBtn = (e) => {
        window.location.href = '/estimate01_2';
    };

    const nextDefaultBtn = (e) => {
        window.location.href = '/estimate03_1';
    };

    return (
        <>
            <h1>2단계, 작업 페이지를 선정해봅시다.</h1>
            <h2>이전 단계에서 설명한 기본금액에 페이지 수를 곱합니다.</h2>
            <br />
            <br />
            <h2>03.작업하려는 페이지의 양은 어떻게 되나요?</h2>
            <h3>혹시 몇 페이지가 나올지에 대해 감이 안잡히시나요?</h3>
            <h3>간단한 정보구조도(LA)를 설계해 보시면</h3>
            <h3>선택에 많은 도움이 될꺼에요!</h3>
            <div>
                <button type="button" className="smallDefaultBtn02_1" onClick={(e) => defaultPrice(e)}>
                    <h1>~20P 기본금액x1</h1>
                </button>
            </div>

            <div>
                <button type="button" className="smallDefaultBtn02_1" onClick={(e) => defaultPriceTwice(e)}>
                    <h1>21P~30P</h1>
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
export default Estimate02_1;
