import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//components
import Header from './../components/Header';
import Button from './../components/Button';

const Login = () => {
    const navigate = useNavigate('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value)
        console.log(e)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        console.log(e)
    }

    const onLogin = (e) => {
        e.preventDefault();
        navigate('/home');
    }
   
    return(
        <>
            <Header
                leftArea={<Button text="<" typeClass={'text'} onClick={()=>navigate(-1)}/>}
                centerArea={'로그인'}
             
            />
            <form onSubmit={onLogin}>
                <div>
                    <div><label htmlFor="id">아이디</label></div>
                    <div><input type="text" value={id} id="id" onChange={onChangeId} required/></div>
                </div>
                <div>
                    <div><label htmlFor="password">비밀번호</label></div>
                    <div><input type="password" value={password} id="password" onChange={onChangePassword} required/></div>
                </div>
                <div>
                    <button type="submit" className="btn primary">확인</button>
                </div>
                <div>
                    <Link to="/join" className="btn text">회원가입</Link>
                </div>
            </form>
        </>
    )
}

export default Login;