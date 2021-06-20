import React from 'react';
import 'estimate/style/Estimate03_1.css';
import checkBox from '../image/Checkbox.png';

const Estimate03_1 = () => {
    const gpsBtn = (e) => {};

    const mapBtn = (e) => {};

    const kakaoPushBtn = (e) => {};

    const communityBtn = (e) => {};

    const sharingBtn = (e) => {};

    const chattingRealTimeBtn = (e) => {};

    const userTypeExtensionBtn = (e) => {};

    const notNeedBtn = (e) => {};

    const preDefaultBtn = (e) => {
        window.location.href = '/estimate02_1';
    };

    const nextDefaultBtn = (e) => {
        window.location.href = '/estimate03_2';
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
                    <div>
                        <span className="smallBtn03_1">GPS(내 주변)</span>
                        <span className="smallPriceBtn03_1">200만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => mapBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">지도(맵 커스텀)</span>
                        <span className="smallPriceBtn03_1">200만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => kakaoPushBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">카카오톡 푸쉬</span>
                        <span className="smallPriceBtn03_1">200만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => communityBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">커뮤니티</span>
                        <span className="smallPriceBtn03_1">200만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => sharingBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">공유하기</span>
                        <span className="smallPriceBtn03_1">100만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => userTypeExtensionBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">유저타입확장</span>
                        <span className="smallPriceBtn03_1">200만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => chattingRealTimeBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">채팅(실시간)</span>
                        <span className="smallPriceBtn03_1">200만원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
                </button>
            </div>

            <div>
                <button type="button" className="smallCheckBox03_1" onClick={(e) => notNeedBtn(e)}>
                    <div>
                        <span className="smallBtn03_1">필요없습니다</span>
                        <span className="smallPriceBtn03_1">0원</span>
                        <span className="smallCheckingBox03_1">
                            <img src={checkBox} />
                        </span>
                    </div>
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
