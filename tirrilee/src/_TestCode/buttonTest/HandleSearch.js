import React, { useState } from 'react';

const HandleSearch = () => {
    const [value, setValue] = useState();

    const handleSearch = () => {
        console.log(value);
    };
    return (
        <>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="button" onClick={handleSearch}>
                    save
                </button>
            </div>
        </>
    );
};
export default HandleSearch;
