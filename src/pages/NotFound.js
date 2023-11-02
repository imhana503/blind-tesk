import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiErrorCircle } from 'react-icons/bi';


const ErrorPage = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center; 
    justify-content:center;
    
    h1 {
        font-size:2rem;
    }
    p {
        font-size:1.7rem;
    }
    >div {
        position:relative;
        padding-top:12rem;
        svg {
            font-size:10rem;
            position:absolute; 
            top:0;  
            left:50%;
            transform: translateX(-50%);
        }
    }
    .btn {
        display:inline-flex;
        width:auto;
        margin-top:2rem;
    }
`

const NotFound  = () => {
    return(
        <ErrorPage>
            <div>
                <BiErrorCircle aria-hidden="true"/>
                <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
                <p>서비스 이용에 불편을 드려 죄송합니다.</p>
                <Link to={'./home'} className="btn primary">이젠 페이지로 이동</Link>
            </div>
        </ErrorPage>
    )
}

export default NotFound;