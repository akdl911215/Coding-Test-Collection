import React, { useCallback } from 'react';
import styled from 'styled-components';

const BackButton = ({ onClick }) => {
    const handleBackList = useCallback(() => {
        if (onClick !== null) {
            onClick();
        }
    }, [onClick]);

    return (
        <header>
            <BackBtn onClick={handleBackList}>뒤로가기</BackBtn>
        </header>
    );
};

export default BackButton;

const BackBtn = styled.button`
    font-size: 20px;
    padding: 10px 10px 10px 0;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
`;
