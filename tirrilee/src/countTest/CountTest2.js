import React, { useState } from 'react';

const CountTest2 = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)} />
                <button onClick={() => setCount(count - 1)} />
            </div>
        </>
    );
};
export default CountTest2;
