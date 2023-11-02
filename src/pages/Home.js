import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainSection = styled.section`
    display:flex;
    padding:2rem;

`

const MainItem = styled.div`
    background-color:var(--color-bg);
    border-radius:1rem;
    flex:1;
    margin:1rem;
    >a {
        display:flex;
        padding:2rem 0 3rem 1rem;
        font-size:1.5rem;
        color:#fff;
    }

`

const Home = () => {
    return(
        <>
            <MainSection>
                <MainItem>
                    <Link to="as;ldk;las">
                        <h2>식품 추천받기</h2>
                    </Link>
                </MainItem>
                <MainItem>
                    <Link to="/Product">
                        <h2>공지사항</h2>
                    </Link>
                </MainItem>
                <MainItem>
                    <Link to="/Product">
                        <h2>상품목록</h2>
                    </Link>
                </MainItem>
            </MainSection>
            <hr/>

        </>  
    )
}

export default Home;  