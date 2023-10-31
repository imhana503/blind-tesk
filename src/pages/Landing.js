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
    position:absolute;
    top:50%;
    left:0;
    transform:translateY(-50%);
`;

const BottomArea = styled.div`
    display: flex;
    margin-top:3rem;
    justify-content: end;
`;

const Landing = () => {
    const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
    return(
        <LandingWrap>
            <LogonArea>
                <image src={process.env.PUBLIC_URL+'/assets/logo192.png'}/>
            </LogonArea>
            <div>
                <div className="btn-group">
                    <a href="https://jihana.tistory.com/68" className="btn kakao" target="_blank" rel="noopener noreferrer">카카오 로그인</a>
                    <a href="https://jihana.tistory.com/68" className="btn apple" target="_blank" rel="noopener noreferrer">애플 로그인</a>
                    <Link to={'/login'} className="btn primary">로그인</Link>
                </div>
                <BottomArea>
                    <Link to={'/home'} className="btn text">회원가입 없이 둘러보기</Link>
                </BottomArea>
            </div>
        </LandingWrap>
    )
}

export default Landing;