import React, { useState } from 'react';

const RadioBtn2 = () => {
    const [inputStatus, setInputStatus] = useState(false);

    const handleClickRadioButton = () => {
        setInputStatus(!inputStatus);
    };

    return (
        <>
            <input type="radio" id="radio" checked={inputStatus} onClick={handleClickRadioButton} />
            <label htmlFor="radio">Radio</label>
        </>
    );
};
export default RadioBtn2;
