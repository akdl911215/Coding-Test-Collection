import React from 'react';

const RadioBtn = () => {
    window.onload = function () {
        document.getElementById('checked').checked = false;
        document.getElementById('unchecked').checked = true;
    };

    return (
        <>
            <label for="checked">checked</label>
            <input type="radio" id="checked" checked />

            <label for="unchecked">unchecked</label>
            <input type="radio" id="unchecked" />
        </>
    );
};
export default RadioBtn;
