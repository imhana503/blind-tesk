import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';


//components
import Header from './../components/Header';
import Button from './../components/Button';

const ErrorMsg = styled.div`
    margin:.5rem 0;
    color:red;
`;


const Join = () => {
    const navigate = useNavigate('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [agreeCheck, setAgreeCheck] = useState('');

    const [error, setError] = useState(false);
    const [errorCheck, setErrorCheck] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[])

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setError(password != e.target.value);
    },[password]);

    const onChangeAgree = useCallback((e) => {
        setAgreeCheck(e.target.checked);
        setErrorCheck(false);
    },[])

    const onLogin = (e) => {
        e.preventDefault();
        if( password != passwordCheck){
            setError(true);
            return;
        }
        if( !agreeCheck ){
            setErrorCheck(true);
            return;
        }
        navigate('/home');
    }
   


    
    return(
        <>
            <Header
                leftArea={<Button text={<AiFillHome className="ico-home"/>} typeClass={'text'} onClick={()=>navigate('./../home')}/>}
                centerArea={'회원가입' }
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
                <div className="input-box">
                    <div className="input-name"><label htmlFor="passwordCheck">비밀번호 확인</label></div>
                    <div className="input-value"><input type="password" value={passwordCheck} id="passwordCheck" onChange={onChangePasswordCheck} required/></div>
                </div>
                {
                    error &&  <ErrorMsg>비밀번호를 잘못입력하셨습니다.</ErrorMsg>
                }
                <div className="input-box">
                    <div><label htmlFor="agreeCheck"><input type="checkbox" id="agreeCheck" value={agreeCheck} onChange={onChangeAgree}/>정보저장을 동의합니다.</label></div>
                </div>
                {
                    errorCheck &&  <ErrorMsg>정보저장을 동의해주세요</ErrorMsg>
                }
                <div className="input-button">
                    <button type="submit" className="btn primary">확인</button>
                </div>
            </form>
        </>
    )
}

export default Join;