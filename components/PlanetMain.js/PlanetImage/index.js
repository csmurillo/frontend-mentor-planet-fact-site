import styled from 'styled-components';
import Image from 'next/image';
import React, {useEffect,useState} from 'react'
import { PlanetImageContext } from '../../../context/PlanetMainContext/PlanetImageContext';

const PlanetImage = ({images,size,currentToggle}) => {

  const { mobileSize, tabletSize, desktopSize }=size;
  const { planet, internal, geology }=images;

  const {displayImage}=PlanetImageContext();

  return (
    <PlanetImageContainer>
      {
        displayImage=='desktop' && 
        <Planet size={desktopSize}>
          {
            currentToggle=='overview' && 
            <Image src={'/images/'+planet} layout='fill'/>
          }
          {
            currentToggle=='structure' && 
            <Image src={'/images/'+internal} layout='fill'/>
          }
          {
            currentToggle=='geology' && 
            <Image src={'/images/'+planet} layout='fill'/>
          }
        </Planet>
      }
      {
        displayImage=='tablet' && 
        <Planet size={tabletSize}>
          {
            currentToggle=='overview' && 
            <Image src={'/images/'+planet} layout='fill'/>
          }
          {
            currentToggle=='structure' && 
            <Image src={'/images/'+internal} layout='fill'/>
          }
          {
            currentToggle=='geology' && 
            <Image src={'/images/'+planet} layout='fill'/>
          }
        </Planet>
      }
      {
        displayImage=='mobile' && 
        <Planet size={mobileSize}>
          {
            currentToggle=='overview' && 
            <Image src={'/images/'+planet} layout='fill'/>
          }
          {
            currentToggle=='structure' && 
            <Image src={'/images/'+internal} layout='fill'/>
          }
          {
            currentToggle=='geology' && 
            <Image src={'/images/'+planet} layout='fill'/>
          }
        </Planet>
      }
      {
        displayImage=='desktop' && 
        <>
          {
          currentToggle=='geology' && 
          <Geology>
            <Image src={'/images/'+geology} width={163} height={199}/>
          </Geology>
        }
        </>
      }
      {
        displayImage=='tablet' && 
        <>
          {
          currentToggle=='geology' && 
          <Geology>
            <Image src={'/images/'+geology} width={103} height={129}/>
          </Geology>
        }
        </>
      }
      {
        displayImage=='mobile' && 
        <>
          {
          currentToggle=='geology' && 
          <Geology>
            <Image src={'/images/'+geology} width={73} height={89}/>
          </Geology>
          }
        </>
      }
    </PlanetImageContainer>
  )
}
const Geology = styled.div`
  position:absolute;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  bottom:2.813rem;
  @media (min-width:768px){
    bottom: 3.125rem;
  }
  @media (min-width:992px){
    bottom: 5.625rem;
  }
  @media (min-width:1400px){
    bottom:0;
  }
`;

const PlanetImageContainer = styled.div`
  grid-area: planetImage;
  position:relative;
  flex:1;
  width:100%;
  height:19rem;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (min-width:768px){
    height:100%;
  }
  @media (min-width:992px){
    height:unset;
  }
`;
const Planet = styled.div`
  position:absolute;
  width:${props=>props.size};
  height:${props=>props.size};
`;

export default PlanetImage;






