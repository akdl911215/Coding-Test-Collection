import React from 'react';

const Estimate03_1 = () => {
    const preDefaultBtn = (e) => {
        window.location.href = '/estimate01_2';
    };

    const nextDefaultBtn = (e) => {
        window.location.href = '/estimate03_1';
    };

    return (
        <>
            <h1>3단계, 기본 기능 외에 꼭 검증하고</h1>
            <h1>싶은 특별한 기능을 알려주세요.</h1>
            <br />
            <br />
            <h2>04.필요한 추가 기능을 선택해보세요!</h2>
            <h3>추가 기능을 통해 진행하시는 서비스가</h3>
            <h3>좀 더 다채로워 질 수 있어요!</h3>
            <h3>어떤 추가 기능 필요한지 고민해보시고 선택해주세요!</h3>
            <h3>(중복 선택 가능합니다!)</h3>
            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => gpsBtn(e)}>
                    <h2>GPS(내 주변)</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => mapBtn(e)}>
                    <h2>지도(맵 커스텀)</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => kakaoPushBtn(e)}>
                    <h2>카카오톡 푸쉬</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => communityBtn(e)}>
                    <h2>커뮤니티</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => sharingBtn(e)}>
                    <h2>공유하기</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => userTypeExtensionBtn(e)}>
                    <h2>유저타입확장</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => chattingRealTimeBtn(e)}>
                    <h2>채팅(실시간)</h2>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => notNeedBtn(e)}>
                    <h2>필요없습니다</h2>
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
export default Estimate03_1;
