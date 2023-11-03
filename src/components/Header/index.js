import styled from 'styled-components';

const HeaderWrap = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:5rem;
    position:sticky;
    top:0;
    padding:0 2rem;
`;

const LeftArea = styled.div`
  
`

const CenterArea = styled.div`
    position:absolute;
    top:50%;
    left:50%;  
    transform:translate(-50%, -50%);
    font-weight:var(--font-bold);
    font-size:2rem;
`

const RightArea = styled.div`
    border:1px solid red
`

const Header = ({ leftArea, centerArea, rightArea }) => 
{
    return(
        <HeaderWrap>
            <LeftArea>{leftArea}</LeftArea>
            <CenterArea>{centerArea}</CenterArea>
            {
                rightArea && <RightArea>{rightArea}</RightArea>
            }
        </HeaderWrap>
    )
}

export default Header;