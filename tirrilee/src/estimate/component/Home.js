import React from 'react';
import 'estimate/style/Home.css';
import startImage from 'estimate/image/startImage.png';

const Home = () => {
    const startBtn = (e) => {
        window.location.href = '/estimate00_1';
    };

    return (
        <>
            <h1>Tirrilee Estimate Program(Beta-Service)</h1>

            <div className="imgcontainer">
                <img src={startImage} />
            </div>

            <button type="button" className="startBtn" onClick={(e) => startBtn(e)}>
                <span className="startFontStyle">시작하기</span>
            </button>
        </>
    );
};
export default Home;
