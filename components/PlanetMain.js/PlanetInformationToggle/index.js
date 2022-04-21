import React from 'react'
import styled from 'styled-components';


const PlanetInformationToggle = ({currentToggle,informationToggle,pageAccentColor}) => {
    return (
        <PlanetInformationToggleContainer>
            <PlanetInformationToggleList>
                <PlanetOverView style={currentToggle=='overview' ? {backgroundColor:pageAccentColor, border:'1px solid transparent'} : {}} onClick={()=>{informationToggle('overview')}}>
                    <p>01</p>
                    <p>OverView</p>
                </PlanetOverView>
                <PlanetStructure style={currentToggle=='structure' ? {backgroundColor:pageAccentColor, border:'1px solid transparent'} : {}} onClick={()=>{informationToggle('structure')}}>
                    <p>02</p>
                    <p>Internal Structure</p>
                </PlanetStructure>
                <PlanetSurface style={currentToggle=='geology' ? {backgroundColor:pageAccentColor, border:'1px solid transparent'} : {}} onClick={()=>{informationToggle('geology')}}>
                    <p>03</p>
                    <p>Surface Geology</p>
                </PlanetSurface>
            </PlanetInformationToggleList>
        </PlanetInformationToggleContainer>
    );
};

const PlanetInformationToggleContainer =styled.div`
    display:none;
    @media (min-width:768px){
        display:flex;
        grid-area: planetToggle;
        margin-left:4.375rem;
    }
    @media (min-width:992px){
        margin-left:0px;
    }
`;
const PlanetInformationToggleList =styled.ul`
    display:flex;
    flex-direction:column;
    gap:1rem;
    width:100%;
    @media (min-width:768px){
        justify-content:center;
    }
    @media (min-width:992px){

    }
`;
const PlanetOverView =styled.li`
    border: 1px solid rgba(255,255,255,.2);
    display: flex;
    gap:1.063rem;
    padding-top: 0.469rem;
    padding-bottom: 0.469rem;
    line-height:1.563rem;
    &:hover{
        cursor:pointer;
        background-color: rgba(216,216,216,.2);
    }
    & p{
        font-size:0.563rem;
        font-weight:700;
        font-family: 'Spartan', sans-serif;
        letter-spacing: 0.119rem;
        border-bottom: 1px solid transparent;
        color:rgba(255, 255, 255, .5);
        text-transform: uppercase;
        padding:0px; margin:0px;
    }
    & p:last-child{
        color:white;
    }
    @media (min-width:768px){
        padding-left:1.25rem;
    }
    @media (min-width:992px){
        padding-left:1.75rem;
        padding-top:0.625rem;
        padding-bottom:0.625rem;
    }
`;
const PlanetStructure =styled.li`
    border: 1px solid rgba(255,255,255,.2);
    display: flex;
    gap:1.063rem;
    padding-top: 0.469rem;
    padding-bottom: 0.469rem;
    line-height:1.563rem;
    &:hover{
        cursor:pointer;
        background-color: rgba(216,216,216,.2);
    }
    & p{
        font-size:0.563rem;
        font-weight:700;
        font-family: 'Spartan', sans-serif;
        letter-spacing: 0.119rem;
        border-bottom: 1px solid transparent;
        color:rgba(255, 255, 255, .5);
        text-transform: uppercase;
        padding:0px; margin:0px;
    }
    & p:last-child{
        color:white;
    }
    @media (min-width:768px){
        padding-left:1.25rem;
    }
    @media (min-width:992px){
        padding-left:1.75rem;
        padding-top:0.625rem;
        padding-bottom:0.625rem;
    }
`;
const PlanetSurface =styled.li`
    border: 1px solid rgba(255,255,255,.2);
    display: flex;
    gap:1.063rem;
    padding-top: 0.469rem;
    padding-bottom: 0.469rem;
    line-height:1.563rem;
    &:hover{
        cursor:pointer;
        background-color: rgba(216,216,216,.2);
    }
    & p{
        font-size:0.563rem;
        font-weight:700;
        font-family: 'Spartan', sans-serif;
        letter-spacing: 0.119rem;
        border-bottom: 1px solid transparent;
        color:rgba(255, 255, 255, .5);
        text-transform: uppercase;
        padding:0px; margin:0px;
    }
    & p:last-child{
        color:white;
    }
    @media (min-width:768px){
        padding-left:1.25rem;
    }
    @media (min-width:992px){
        padding-left:1.75rem;
        padding-top:0.625rem;
        padding-bottom:0.625rem;
    }
`;

export default PlanetInformationToggle;
