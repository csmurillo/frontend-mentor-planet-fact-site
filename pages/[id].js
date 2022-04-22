import Head from 'next/head';
import react, {useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PlanetMain from '../components/PlanetMain.js';

import {data} from '../data/data'; 

export default function Post({planetData,pageAccentColor}) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Planets fact site</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      </Head>
      <PlanetPage>
        <Header/>
        <PlanetMain planetData={planetData} pageAccentColor={pageAccentColor}/>
      </PlanetPage>
    </>
    );
}
const PlanetPage = styled.div`
  width:100%; height:100%;
  display:flex;
  flex-direction:column;
  background-image: url(./images/background-stars.svg);
`;


export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths=[
        {
            params: {
              id: 'mercury'
            }
        },
        {
            params: {
              id: 'venus'
            }
        },
        {
            params: {
              id: 'earth'
            }
        },
        {
            params: {
              id: 'mars'
            }
        },
        {
            params: {
              id: 'jupiter'
            }
        },
        {
            params: {
              id: 'saturn'
            }
        },
        {
            params: {
              id: 'uranus'
            }
        },
        {
            params: {
              id: 'neptune'
            }
        },
    ];
    return {
        paths,
        fallback:false
    };
}

export async function getStaticProps({ params }) {
  let planetData=null;
  for(var i=0; i<data.length;i++){
    if(data[i].name.toLowerCase()===params.id.toLowerCase()){
      planetData=data[i];
    }
  }
  let pageAccentColor;
  if(planetData.name.toLowerCase()=='mercury'){
    pageAccentColor='#419EBB';
  }
  else if(planetData.name.toLowerCase()=='venus'){
    pageAccentColor='#EDA249';
  }
  else if(planetData.name.toLowerCase()=='earth'){
    pageAccentColor='#6D2ED5';
  }
  else if(planetData.name.toLowerCase()=='mars'){
    pageAccentColor='#D14C32';
  }
  else if(planetData.name.toLowerCase()=='jupiter'){
    pageAccentColor='#D83A34';
  }
  else if(planetData.name.toLowerCase()=='saturn'){
    pageAccentColor='#CD5120';
  }
  else if(planetData.name.toLowerCase()=='uranus'){
    pageAccentColor='#1EC2A4';
  }
  else if(planetData.name.toLowerCase()=='neptune'){
    pageAccentColor='#2d68f0';
  }
  return {
    props: {
      planetData,
      pageAccentColor
    }
  }
}









