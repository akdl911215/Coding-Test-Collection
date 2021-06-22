import React, { useState } from 'react';

const ChangeCheck = () => {
    const [isCheck, setIsCheck] = useState(true);

    const checkBtn = () => {
        // boolean 값 변경 로직
        console.log('isCheck  ::: ', isCheck);
        console.log('setIsCheck  ::: ', setIsCheck);
        setIsCheck((check: boolean) => !check);
    };

    return (
        <>
            <div className="container">
                {isCheck && <h1>hihi</h1>}
                <button onClick={checkBtn}>Change!</button>
            </div>
        </>
    );
};
export default ChangeCheck;
