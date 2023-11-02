import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrPrevious } from 'react-icons/gr';

//components
import Header from './../components/Header';
import Button from './../components/Button';

const BottomArea = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:.2rem;
`

const Login = () => {
    const navigate = useNavigate('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    }
   
    return(
        <>
            <Header
                leftArea={<Button text={<GrPrevious/>} typeClass={'text'} onClick={()=>navigate(-1)}/>}
                centerArea={'로그인'}
                rightArea={false}
            />
            <form onSubmit={onLogin} className="form-wrap">
                <div className="input-box">
                    <div className="input-name"><label htmlFor="id">아이디</label></div>
                    <div className="input-value"><input type="text" value={id} id="id" onChange={onChangeId} required/></div>
                </div>
                <div className="input-box">
                    <div className="input-name"><label htmlFor="password">비밀번호</label></div>
                    <div className="input-value"><input type="password" value={password} id="password" onChange={onChangePassword} required/></div>
                </div>
                <div className="input-button">
                    <button type="submit" className="btn primary">확인</button>
                </div>
                <BottomArea>
                    <Link to="/join" className="btn text">회원가입</Link>
                </BottomArea>
            </form>
        </>
    )
}

export default Login;