import React, { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionIntro = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    height:100vh;
    position:relative;
    padding:1rem;
`;

const IntroItem = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100vh;
    margin:-5rem 0;
`;

const IntroBottom = styled.div`
    display: flex;
    margin-top:3rem;
    justify-content: end;
`;

const Landing = () => {

    return(
        <SectionIntro className="section">
            <IntroItem>
                <div className="tit-wrap">
                    <h1 className="tit-page"><span class="txt">OO서비스에 가입하세요 쇼핑의 어려움을 해소해드려요</span></h1>
                </div>
                <div className="btn-group">
                    <Link className="btn primary">시각 지원이 필요해요</Link>
                    <Link className="btn secondary">자원봉사자로 참여할게요</Link>
                </div>
            </IntroItem>
            <IntroBottom>
                <p className="text">지금 회원가입하시면 쇼핑 상담 5회 이용권을 제공해 드립니다.</p>
            </IntroBottom>
        </SectionIntro>
    )
}

export default Landing;