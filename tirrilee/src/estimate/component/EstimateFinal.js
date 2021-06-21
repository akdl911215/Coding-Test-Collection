import React from 'react';
import 'estimate/style/EstimateFinal.css';

const EstimateFinal = () => {
    const redoingBtn = (e) => {
        window.location.href = '/';
    };

    return (
        <>
            <h1>수고하셨씁니다.</h1>
            <h1>선택 프로젝트 : </h1>
            <h1>견적 가격 : 대략 : 만원</h1>
            <h1>입니다.</h1>
            <br />
            <br />
            <h2>하지만 정확한 견적은 아니에요</h2>
            <h2>티릴리와 함께 같이 진단해보고 멋진 서비스를 만들어보아요.</h2>

            <div>
                <button type="button" className="redoing" onClick={(e) => redoingBtn(e)}>
                    다시 하기
                </button>
            </div>
        </>
    );
};
export default EstimateFinal;
