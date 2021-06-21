import React, { useEffect } from 'react';
import 'estimate/style/Common.css';
import 'estimate/style/Estimate01_1.css';
import { useDispatch } from 'react-redux';
import { defaultChoice } from 'estimate/reducer/estimate.reducer';

const Estimate01_1 = () => {
    const dispatch = useDispatch();
    const planExits = (e) => {};

    const nonPlanExits = (e) => {};

    const preDefaultBtn = (e) => {
        window.location.href = '/estimate00_1';
    };

    const nextDefaultBtn = (e) => {
        window.location.href = '/estimate01_2';
    };

    useEffect(() => {
        dispatch(defaultChoice());
    });

    return (
        <>
            <h1>1단계, 먼저 개발범위를 먼저 생각해보아요.</h1>
            <h2>개발범위로 기본금액을 정할 수 있어요</h2>
            <br />
            <br />
            <h2>01.상세 기획이 있나요?</h2>
            <h3>아직 상세 기획 없이 단순 아이디어만 있어도 걱정하지 마세요!</h3>
            <h3>티릴리와 함께 더 멋진 기획을 만들 수 있습니다!</h3>
            <div>
                <button type="button" className="defaultBtn01_1" onClick={(e) => planExits(e)}>
                    <h1>네! 상세 기획이 있어요.</h1>
                    <h3>좋아요! 개발을 위한 기획을 함께 진행해요.</h3>
                    <h1>+50만원</h1>
                </button>
            </div>

            <div>
                <button type="button" className="defaultBtn01_1" onClick={(e) => nonPlanExits(e)}>
                    <h1>앗..아직 상세 기획이 없어요.</h1>
                    <h3>괜찮아요~ 티릴리와 함께 서비스를 기획해보아요.</h3>
                    <h1>+100만원</h1>
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
export default Estimate01_1;
