import React from 'react';
import 'estimate/style/Estimate03_2.css';
import checkBox from '../image/Checkbox.png';

const Estimate03_2 = () => {
    const serviceManagerBtn = (e) => {};

    const defaultAdminBtn = (e) => {};

    const extensionAdminBtn = (e) => {};

    const notNeedBtn = (e) => {};

    const preDefaultBtn = (e) => {
        window.location.href = '/estimate03_1';
    };

    const nextDefaultBtn = (e) => {
        window.location.href = '/estimate_final';
    };

    return (
        <>
            <h1>3단계, 기본 기능 외에 꼭 검증하고</h1>
            <h1>싶은 특별한 기능을 알려주세요.</h1>
            <br />
            <br />
            <h2>05.관리자 페이지를 선택해주세요!</h2>
            <h3>관리자 페이지는 앱을 관리하기 위해</h3>
            <h3>유용하게 사용되는 페이지에요! 직접 DB를 관리하거나 관리가</h3>
            <h3>필요 없는게 아니라면 꼭 선택해야 하는 기능이에요!</h3>
            <div>
                <button type="button" className="twoStageTypeCheckBox03_2" onClick={(e) => serviceManagerBtn(e)}>
                    <div>
                        <span className="twoStageTypeCheckBox03_2">
                            <img src={checkBox} />
                        </span>
                        <span className="mainText03_2">서비스 내에서 관리</span>
                        <span className="subText03_2">관리자권한 부여</span>
                        <span className="priceText03_2">100만원</span>
                    </div>
                </button>

                <button type="button" className="twoStageTypeCheckBox03_2" onClick={(e) => defaultAdminBtn(e)}>
                    <div>
                        <span className="twoStageTypeCheckBox03_2">
                            <img src={checkBox} />
                        </span>
                        <span className="mainText03_2">기본 Admin</span>
                        <span className="subText03_2">관리자 페이지 운영</span>
                        <span className="priceText03_2">150만원</span>
                    </div>
                </button>

                <button type="button" className="twoStageTypeCheckBox03_2" onClick={(e) => extensionAdminBtn(e)}>
                    <div>
                        <span className="twoStageTypeCheckBox03_2">
                            <img src={checkBox} />
                        </span>
                        <span className="mainText03_2">확장 Admin</span>
                        <span className="subText03_2">관리자페이지 + 대쉬보드</span>
                        <span className="priceText03_2">200만원</span>
                    </div>
                </button>

                <button type="button" className="twoStageTypeCheckBox03_2" onClick={(e) => notNeedBtn(e)}>
                    <div>
                        <span className="twoStageTypeCheckBox03_2">
                            <img src={checkBox} />
                        </span>
                        <span className="mainText03_2">필요없어요</span>
                        <span className="subText03_2">해당 기능이 필요없어요.</span>
                        <span className="priceText03_2">+ 0만원</span>
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
export default Estimate03_2;
