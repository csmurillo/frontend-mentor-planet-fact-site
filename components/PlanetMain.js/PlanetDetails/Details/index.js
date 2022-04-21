import React from 'react'
import styled from 'styled-components';

const Details = ({planetDetailTitle,planetDetail}) => {
  return (
    <DetailsContainer>
        <DetailsWrap>
            <p>{planetDetailTitle}</p>
            <p>{planetDetail}</p>
        </DetailsWrap>
    </DetailsContainer>
  )
}
const DetailsContainer = styled.li`
    border: 1px solid rgba(255,255,255,.2);
    padding: 0.688rem 1.5rem;
    flex:1;
    @media (min-width:768px){
        flex:1;
        padding: 1.094rem 0.938rem;
    }
    @media (min-width:992px){
        padding:1.438rem 1.438rem;
    }
`;
const DetailsWrap =styled.div`
    display:flex;
    justify-content:space-between;
    & p {
        text-transform: uppercase;
        padding:0; margin:0;
    }
    & p:first-child{
        font-size:.5rem;
        color:white;
        font-family: 'Spartan', sans-serif; 
        mix-blend-mode: normal;
        opacity: 0.5;
        display:flex;
        align-self:center;     
    }
    & p:last-child{
        font-size:1.25rem;
        color:white;
        font-family: 'Antonio', sans-serif;
    }
    @media (min-width:768px){
        justify-content:unset;
        flex-direction:column;
        & p:first-child{
            font-size:.5rem;
            align-self:flex-start; 
            margin-bottom:0.375rem;  
        }
        & p:last-child{
            font-size:1.5rem;
        }
    }
    @media (min-width:992px){
        justify-content:unset;
        flex-direction:column;
        & p:first-child{
            font-size:0.688rem;
            align-self:flex-start;   
            margin-bottom:.25rem;  
        }
        & p:last-child{
            font-size:2.5rem;
        }
    }
`;

export default Details;