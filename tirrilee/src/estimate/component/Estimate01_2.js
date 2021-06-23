import React from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate01_2.css';
import { totalPriceResult } from 'estimate/reducer/estimate.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Estimate01_2 = () => {
    const totalPriceValue = useSelector((state) => state.estimates.totalPrice);
    console.log('totalPriceValue : ', totalPriceValue);

    const design = (e) => {};

    const nonDesign = (e) => {};

    const nextDefaultBtn = (e) => {};

    return (
        <>
            <h1>1단계, 먼저 개발범위를 먼저 생각해보아요.</h1>
            <h2>개발범위로 기본금액을 정할 수 있어요</h2>
            <br />
            <br />
            <h2>02.디자인이 되어 있나요?</h2>
            <h3>아직 구체적인 디자인이 진행되어 있지 않아도 돼요!</h3>
            <h3>티릴리의 디자이너들과 함께 멋진 디자인을 만들어봐요!</h3>
            <div>
                <button type="button" className="defaultBtn01_2" onClick={(e) => design(e)}>
                    <h1>네! 디자인이 되어 있어요.</h1>
                    <h3>멋져요! 개발을 할 수 있도록 디자인을 함께 보완해요.</h3>
                    <h1>+50만원</h1>
                </button>
            </div>

            <div>
                <button type="button" className="defaultBtn01_2" onClick={(e) => nonDesign(e)}>
                    <h1>앗..디자인은 없어요.</h1>
                    <h3>괜찮아요~ 티릴리와 함께 디자인을 진행해봐요!</h3>
                    <h1>+100만원</h1>
                </button>
            </div>

            <Link to="/estimate01_1">
                <button type="button" className="preDefaultBtn">
                    이전 단계
                </button>
            </Link>

            <Link to="/estimate02_1">
                <button type="button" className="nextDefaultBtn" onClick={(e) => nextDefaultBtn(e)}>
                    다음 단계
                </button>
            </Link>
        </>
    );
};
export default Estimate01_2;
