import React, { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftArea = styled.div`
    border:1px solid red
`

const CenterArea = styled.div`
    border:1px solid red
`

const RightArea = styled.div`
    border:1px solid red
`

const Header = ({ leftArea, centerArea, rightArea }) => {
    return(
        <HeaderWrap>
            <LeftArea>{leftArea}</LeftArea>
            <CenterArea>{centerArea}</CenterArea>
            <RightArea>{rightArea}</RightArea>
        </HeaderWrap>
    )
}

export default Header;