import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrPrevious } from 'react-icons/gr';

import { Products } from './../data';

//components
import Header from './../components/Header';
import Button from './../components/Button';

import 

const Product = () => {
    const navigate = useNavigate();
    return(
        <>
            <Header 
                leftArea={<Button text={<GrPrevious/>} typeClass={'text'} onClick={()=>navigate(-1)}/>}
                centerArea={'상품목록'}
                rightArea={false}
            />
        </>
    )
}

export default Product;