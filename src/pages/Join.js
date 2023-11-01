import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//components
import Header from './../components/Header';

const Join = () => {
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
        alert('회원가입완료');
        navigate('/home');
    }
   
    return(
        <>
            <Header
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
                    <div><label htmlFor="password">비밀번호 확인</label></div>
                    <div><input type="password" value={password} id="password" onChange={onChangePassword} required/></div>
                </div>
                <div>비밀번호를 잘못입력하셨습니다.</div>
                <div>
                    <div><label htmlFor=""><input type="checkbox"/>정보저장을 동의합니다.</label></div>
                </div>
                <div>
                    <button type="submit" className="btn primary">확인</button>
                </div>
            </form>
        </>
    )
}

export default Join;