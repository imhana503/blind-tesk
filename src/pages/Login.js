import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
    const [id, setId] = useState('');
   
    return(
        <>
            <form>
                <div>
                    <label htmlFor="id">아이티</label>
                    <input type="text" value={id} id="id"/>
                </div>
            </form>
        </>
    )
}

export default Login;