import React from 'react'
import styled from 'styled-components';


const PlanetInformationToggleMobile = ({currentToggle,informationToggle,pageAccentColor}) => {
    return (
        <PlanetInformationToggleMobileContainer>
            <PlanetInformationToggleList>
                <PlanetOverView onClick={()=>{informationToggle('overview')}}>
                    <p style={currentToggle=='overview' ? {borderBottom: '5px solid'+ pageAccentColor,color: 'white'} : {}}>OverView</p>
                </PlanetOverView>
                <PlanetStructure onClick={()=>{informationToggle('structure')}}>
                    <p style={currentToggle=='structure' ? {borderBottom: '5px solid'+ pageAccentColor,color: 'white'} : {}}>Structure</p>
                </PlanetStructure>
                <PlanetSurface onClick={()=>{informationToggle('geology')}}>
                    <p style={currentToggle=='geology' ? {borderBottom: '5px solid'+ pageAccentColor,color: 'white'} : {}}>Surface</p>
                </PlanetSurface>
            </PlanetInformationToggleList>
        </PlanetInformationToggleMobileContainer>
    );
};

const PlanetInformationToggleMobileContainer =styled.div`
    border-bottom:1px solid rgba(255, 255, 255, .2);
    @media(min-width:768px){
        display:none;
    }
`;
const PlanetInformationToggleList =styled.ul`
    display:flex;
    justify-content:center;
    gap:2.75rem;
`;
const PlanetOverView =styled.li`
    &:hover{
        cursor:pointer;
    }
    & p{
        padding:0; margin:0;
        font-size:0.563rem;
        font-weight:700;
        font-family: 'Spartan', sans-serif;
        line-height:0.625rem;
        letter-spacing: 0.119rem;
        color:rgba(255, 255, 255, .5);
        text-transform: uppercase;
        padding-top:1.25rem;
        padding-bottom:0.938rem;
    }
`;
const PlanetStructure =styled.li`
    &:hover{
        cursor:pointer;
    }
    & p{
        padding:0; margin:0;
        font-size:0.563rem;
        font-weight:700;
        font-family: 'Spartan', sans-serif;
        line-height:0.625rem;
        letter-spacing: 0.119rem;
        color:rgba(255, 255, 255, .5);
        text-transform: uppercase;
        padding-top:1.25rem;
        padding-bottom:0.938rem;
    }
`;
const PlanetSurface =styled.li`
    &:hover{
        cursor:pointer;
    }
    & p{
        padding:0; margin:0;
        font-size:0.563rem;
        font-weight:700;
        font-family: 'Spartan', sans-serif;
        line-height:0.625rem;
        letter-spacing: 0.119rem;
        color:rgba(255, 255, 255, .5);
        text-transform: uppercase;
        padding-top:1.25rem;
        padding-bottom:0.938rem;
    }
`;

export default PlanetInformationToggleMobile;
