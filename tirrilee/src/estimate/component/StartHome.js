import React from 'react';
import ReactPlayer from 'react-player';
import 'estimate/style/Home.css';

const StartHome = () => {
    const startBtn = (e) => {
        window.location.href = '/home';
    };
    return (
        <>
            <div>
                <h1>티릴리와 함께 도전해 보겠습니까? 행동으로 움직이는 사람만이 성공할 수 있습니다.</h1>
                <h1>악착같이 변하고 행동해야합니다. 티릴리는 고객님들을 도와드리기 위해 존재합니다.</h1>

                <div>
                    <ReactPlayer url="https://www.youtube.com/watch?v=w5CipwUaoco" playing controls />
                </div>

                <h1>티릴리와 함께 도전해보고 싶으시면 "함께 하기"를 눌러주세요</h1>
                <button type="button" className="startBtn" onClick={(e) => startBtn(e)}>
                    <span className="startFontStyle">함께하기</span>
                </button>
            </div>
        </>
    );
};
export default StartHome;
