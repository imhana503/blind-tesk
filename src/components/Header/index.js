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

const centerArea = styled.div`
    border:1px solid red
`

const RightArea = styled.div`
    border:1px solid red
`

const Header = ({text}) => {
    return(
        <HeaderWrap>
            <LeftArea>left</LeftArea>
            <centerArea>${text}</centerArea>
            <RightArea>right</RightArea>
        </HeaderWrap>
    )
}

export default Header;