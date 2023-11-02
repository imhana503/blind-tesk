import React, { Link } from 'react-router-dom';
import styled from 'styled-components';


const LandingWrap = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    height:100vh;
    position:relative;
    padding:1rem;
`;

const LogonArea = styled.div`
    width:100vw
    height:100vh;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    img {
        width:13rem;
        height:10rem;
    }
`;

const BottomArea = styled.div`
    display: flex;
    margin-top:3rem;
    justify-content: end;
`;



const Landing = () => {
    
    return(
        <LandingWrap>
            <LogonArea><img src={'/assets/sorimarket-logo.webp'} alt="소리마켓"/></LogonArea>
            <div className="btn-group">
                <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount#login" className="btn kakao" target="_blank" rel="noopener noreferrer">카카오 로그인</a>
                <a href="https://appleid.apple.com/sign-in" className="btn apple" target="_blank" rel="noopener noreferrer">애플 로그인</a>
                <Link to={'/login'} className="btn primary">로그인</Link>
            </div>
            <BottomArea>
                <Link to={'/home'} className="btn text">회원가입 없이 둘러보기</Link>
            </BottomArea>
           
        </LandingWrap>
    )
}

export default Landing;