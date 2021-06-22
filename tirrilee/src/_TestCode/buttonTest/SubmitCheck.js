import React, { useState } from 'react';

const SubmitCehck = () => {
    const [count, setCount] = useState(0);


    let doubleSubmitFlag = false;
    const doubleSubmitCheck = () => {
        console.log('doubleSubmitCheck() ::: ', doubleSubmitCheck());
        if (doubleSubmitFlag) {
            setCount(count - 1);
            console.log('if doubleSubmitFlag ::: ', doubleSubmitFlag);
            return doubleSubmitFlag;
        } else {
            doubleSubmitFlag = true;
            setCount(count + 1);
            console.log('else doubleSubmitFlag ::: ', doubleSubmitFlag);
            return false;
        }
    };

    const insert = (e) => {
        alert('시작?');
        if (doubleSubmitCheck()) return;
        console.log(doubleSubmitCheck());

        alert('등록');
    };

    return (
        <>
            {count}

            <div>
                <button type="button" value="등록" onclick={(e) => insert(e)}>
                    버튼
                </button>
            </div>
        </>
    );
};
export default SubmitCehck;
