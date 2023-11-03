import {  useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrPrevious } from 'react-icons/gr';
import { AiFillStar } from 'react-icons/ai';

import { Products } from './../data';

//components
import Header from './../components/Header';
import Button from './../components/Button';

const ProductList = styled.ul`  
    padding:2rem 3rem;
    &>li {
        background-color:var(--color-bg);
        border-radius:2rem;
        &>a {
            display:block;
            padding:2rem;
        }
        &+li {
            margin-top:2rem;
        }
    }   
    
`;

const ProductTiltle = styled.p`
    margin-bottom:2rem;
    font-size:1.6rem;  
    font-weight:700;
    
`

const ProductInfo = styled.div`
    display:flex;
    color:#000;
    &>img {
        width:10rem;
        height:10rem;

    }
    &>div{
        display:flex;
        flex-direction: column;
        position:relative;
        padding:1rem 0 0 2rem;
        font-size:1.6rem;

    }
`;

const Rating = styled.span`
    position:absolute;
    bottom:.3rem;
    left:2rem;
    &>svg {
        margin-right:.3rem;
        vertical-align:middle;
    }
`


const Product = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('rating');

    const onFillterClick = useCallback((e) => {
        // console.log( e.target.getAttribute('data-type') == "rating" ); 

       
        // const getSortList = () => {
        //    const copyList = JSON.parse(JSON.stringify(Products));
        //    copyList.map((item, id)=>{
        //     item.rating.sort((a,b)=> console.log(b-a))
        //    })
          
        // }
  
        // if( e.target.getAttribute('data-type') == "rating" ){
        //     console.log('true');
        //     getSortList();
            
        // }


        

        
       
    },[filter])
    

    

    return(
        <>
            <Header 
                leftArea={<Button text={<GrPrevious/>} typeClass={'text'} onClick={()=>navigate(-1)}/>}
                centerArea={'상품목록'}
                rightArea={false}
            />
            <section>
                <button type="button" onClick={onFillterClick} data-type="rating" data-active={true}>높은 별점</button>
                <button type="button" onClick={onFillterClick} data-type="price" data-active={false}>낮은 가격</button>
                <button type="button" onClick={onFillterClick} data-type="delivery" data-active={false}>무료 배송</button>
            </section>
            <section>
                <ProductList data-element="tabs">
                    {
                        Products.map((item, idx)=>{
                            return(
                                <li key={item.id}>
                                    <Link to="">
                                        <ProductTiltle>{item.title.slice(0,40)}</ProductTiltle>
                                        <ProductInfo>
                                            <img src={item.thumb} al=""/>
                                            <div>
                                                <span>{item.price}</span>
                                                <span>{item.delivery}</span>
                                                <Rating><AiFillStar aria-hidden="true"/>{item.rating}점</Rating>
                                            </div>
                                        </ProductInfo>
                                    </Link>
                                </li>
                            );
                        })  
                    }
                </ProductList>
            </section>
        </>
    )
}

export default Product;