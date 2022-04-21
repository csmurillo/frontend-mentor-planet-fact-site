import React from 'react';
import styled from 'styled-components';
import Details from './Details';

const PlanetDetails = ({rotation, revolution, radius, temperature}) => {
  return (
    <PlanetDetailsContainer>
      <PlanetDetailsList>
        <Details planetDetailTitle='Rotation Time' planetDetail={rotation}></Details>
        <Details planetDetailTitle='Revolution Time' planetDetail={revolution}></Details>
        <Details planetDetailTitle='Radius' planetDetail={radius}></Details>
        <Details planetDetailTitle='Temperature' planetDetail={temperature}></Details>
      </PlanetDetailsList>
    </PlanetDetailsContainer>
  )
}
const PlanetDetailsContainer =styled.div`
  flex:1;
`;
const PlanetDetailsList =styled.ul`
  display:flex;
  flex-direction:column;
  gap:0.625rem;
  @media (min-width:768px){
    flex-direction:row;
    gap:0.688rem;
  }
  @media (min-width:992px){
    gap:1.875rem;
  }
`;


export default PlanetDetails;
