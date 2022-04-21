import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Menu = () => {
  return (
    <MenuContainer>
        <PlanetsList>
          <Link href='/mercury'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#DEF4FC'></PlanetCircle>
                  <Planet>Mercury</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/venus'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#F7CC7F'></PlanetCircle>
                  <Planet>Venus</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/earth'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#545BFE'></PlanetCircle>
                  <Planet>Earth</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/mars'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#FF6A45'></PlanetCircle>
                  <Planet>Mars</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/jupiter'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#ECAD7A'></PlanetCircle>
                  <Planet>Jupiter</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/saturn'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#FCCB6B'></PlanetCircle>
                  <Planet>Saturn</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/uranus'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#65F0D5'></PlanetCircle>
                  <Planet>Uranus</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
          <Link href='/neptune'>
            <a>
              <PlanetLink>
                <PlanetGroup>
                  <PlanetCircle color='#497EFA'></PlanetCircle>
                  <Planet>Neptune</Planet>
                </PlanetGroup>
                <Arrow src="/images/icon-chevron.svg"></Arrow>
              </PlanetLink>
            </a>
          </Link>
        </PlanetsList>
    </MenuContainer>
  )
}
const MenuContainer = styled.menu`
    margin:0; padding:0;
    position:absolute;
    background-color: #070724;
    flex:1;
    margin-top:4.375rem;
    height:100%; width:100%;
    z-index:9999;
    display:flex;
    flex-direction: column;
    @media (min-width:768px){
      display:none;
    }
`;

const PlanetsList = styled.ul`
margin-top:1.5rem;
padding-left:1.5rem;
padding-right:1.5rem;`;
const PlanetLink = styled.li`
display:flex;
justify-content:space-between;
padding-top:1.25rem;
padding-bottom:1.25rem;
border-bottom:0.063rem solid rgba(255,255,255,.1)`;
const PlanetGroup = styled.div`
display:flex;
gap:1.25rem;`;
const PlanetCircle = styled.div`
height:1.25rem; width:1.25rem;
border-radius:0.938rem;
background-color:${props => props.color};
`;
const Planet = styled.p`
display: flex;
align-self: flex-end;
font-size:0.938rem;
letter-spacing: 0.085rem;
line-height: 1.563rem;
color:white;
font-family: 'Spartan', sans-serif; 
font-weight:700;
text-transform: uppercase;
padding:0; margin:0;
`;
const Arrow =styled.img`
width:0.5rem; height:0.625rem;`;
export default Menu;