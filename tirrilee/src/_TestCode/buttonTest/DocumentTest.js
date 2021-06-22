import React from 'react';

const DocumentTest = () => {
    const getValueInput = () => {
        let inputValue = document.getElementById('domTextElement').value;
        document.getElementById('valueInput').innerHTML = inputValue;
    };

    return (
        <>
            <h4>Change the text of the text , and then click the buttons</h4>

            <label for="domTextElement">Name : </label>
            <input type="text" id="domTextElement"></input>

            <button type="button" onClick={() => getValueInput()}>
                click me!!
            </button>

            <p id="valueInput"></p>
        </>
    );
};
export default DocumentTest;
