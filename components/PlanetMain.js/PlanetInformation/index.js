import styled from 'styled-components';
import Link from 'next/link';
import Source from '../../../public/images/icon-source.svg';

const PlanetInformation = ({planetName='Earth',currentPlanetInformation})=>{
    return (
        <PlanetInformationContainer>
            <PlanetInformationName>
                {planetName}
            </PlanetInformationName>
            <PlanetInformationP>
                {currentPlanetInformation.content}
            </PlanetInformationP>
            <PlanetInformationSource>
                    <p>
                        Source: 
                        <a href={''+currentPlanetInformation.source} target="_blank">
                            <span>Wikipedia</span> 
                            <span><Source></Source></span>
                        </a>
                    </p>
            </PlanetInformationSource>
        </PlanetInformationContainer>
    );
};
const PlanetInformationContainer =styled.div`
    margin-bottom:1.75rem;
    @media(min-width:768px){
        grid-area:planetInformation;
    }
    @media (min-width:992px){
        margin-bottom:2.438rem;
    }
`;
const PlanetInformationName =styled.h1`
    padding:0; margin:0;
    color:white;
    font-size:2.5rem;
    font-family: 'Antonio', sans-serif;
    font-weight:400;
    text-transform: uppercase;
    margin-bottom:1rem;
    text-align:center;
    @media (min-width:768px){
        text-align:unset;
        font-size:3rem;
        margin-bottom:1.5rem;
    }
    @media (min-width:992px){
        font-size:5rem;
        margin-bottom:1.438rem;
    }
`;
const PlanetInformationP =styled.p`
    padding:0; margin:0;
    color:white;
    font-size:0.688rem;
    font-family: 'Spartan', sans-serif;
    font-weight:400;
    line-height:1.375rem;
    display:block;
    text-align:center;
    margin-bottom:0.625rem;
    @media (min-width:768px){
        text-align:unset;
        font-size:0.688rem;
        line-height:1.375rem;
        margin-bottom:2rem;
    }
    @media (min-width:992px){
        font-size:0.875rem;
        line-height:1.563rem;
        margin-bottom:1.5rem;
    }
`;
const PlanetInformationSource = styled.div`
    color:white;
    padding:0; margin:0;
    & p{
        justify-content:center;
        display:flex;
        padding:0; margin:0;
        font-family: 'Spartan', sans-serif;
        font-weight:400;
        font-size:0.75rem;
        line-height:1.563rem;
        color: rgba(255,255,255,.5);
        mix-blend-mode: normal;
    }
    & span:first-child{
        text-decoration: underline;
        margin-right:0.313rem;
    }
    & span:last-child{
        align-self:center;
    }
    & path{
        color:white;
    }
    @media (min-width:768px){
        & p{
            justify-content:unset;
        }
    }
    @media (min-width:992px){

    }
`;

export default PlanetInformation;