import React, {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components';
import Image from 'next/image';

import MenuIcon from '../../public/images/icon-hamburger.svg';
import Menu from './Menu';
import Link from 'next/link';
import { HeaderContext } from '../../context/HeaderContext';


const Header = ()=>{
  const {menu,menuToggle}=HeaderContext();

  return (
    <>
      <HeaderContainer>
      <LogoContainer>
        <a>The Planets</a>
      </LogoContainer>
      <HamburgerIconContainer menuActive={menu}>
        <MenuIcon onClick={menuToggle}/>
      </HamburgerIconContainer>
      <PlanetNav>
        <PlanetList>
          <Link href='/mercury'>
            <Planet color='#419EBB'>
                <a>Mercury</a>
            </Planet>
          </Link>
          <Link href='/venus'>
            <Planet color='#EDA249'>
                <a>Venus</a>
            </Planet>
          </Link>
          <Link href='/earth'>
            <Planet color='#6D2ED5'>
                <a>Earth</a>
            </Planet>
          </Link>
          <Link href='/mars'>
            <Planet color='#D14C32'>
                <a>Mars</a>
            </Planet>
          </Link>
          <Link href='/jupiter'>
            <Planet color='#D83A34'>
                <a>Jupiter</a>
            </Planet>
          </Link>
          <Link href='/saturn'>
            <Planet color='#CD5120'>
                <a>Saturn</a>
            </Planet>
          </Link>
          <Link href='/uranus'>
            <Planet color='#1EC2A4'>
                <a>Uranus</a>
            </Planet>
          </Link>
          <Link href='/neptune'>
            <Planet color='#2d68f0'>
                <a>Neptune</a>
            </Planet>
          </Link>
        </PlanetList>
      </PlanetNav>
    </HeaderContainer>
    {menu&&<Menu/>}
    </>
  );
};

const PlanetNav = styled.nav`
display:none;
// tablet
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    display:block;
}
// tablet
@media (min-width:768px){
  display:flex;
  justify-content:center;
}
// desktop
@media (min-width:992px){
  display:block;
}`;
const PlanetList = styled.ul`
  display:flex;
  gap:2.063rem;
  list-style-type: none;
  padding:0; margin:0;
`;
const Planet = styled.li`
font-size:.688rem;
font-family: 'Spartan', sans-serif;
font-weight:700;
color:white;
text-transform: uppercase;
line-height:1.563rem;
border-top: 0.313rem solid transparent;
@media (min-width:768px){
}
// desktop styles
@media (min-width:992px){
  padding-top:2.188rem;
  padding-bottom:2.188rem;
  &:hover{
    cursor:pointer;
    border-top:0.313rem solid ${props => props.color};
  }
}
`;

const HeaderContainer = styled.header`
display:flex;
justify-content:space-between;
padding:1rem 1.5rem;
border-bottom:1px solid rgba(255, 255, 255, .2);
// tablet styles
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    display:block;
}
// tablet
@media (min-width:768px){
  display:block;
}
// desktop styles
@media (min-width: 992px) {
  margin-bottom:7.875rem;
  display:flex;
  padding:0px;
  padding-left:2.563rem;
  padding-right:2.563rem;
}
`;
const LogoContainer = styled.div`
  color:white;
  & a {
    text-decoration:none;
    padding:0; margin:0;
    font-size:1.75rem;
    font-weight:400;
    font-family: 'Antonio', sans-serif;
    text-transform: uppercase;
  }
  // tablet
  @media (min-width:768px){
    display:flex;
    justify-content:center;
    margin-bottom:2.5rem;
  }
  // desktop
  @media (min-width:992px){
    margin:0;
    display:flex;
    align-items:center;
  }
`;
const HamburgerIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg path{
    fill:${props=>props.menuActive?"rgba(255, 255, 255,.5);":"white"}
  }
  & svg:hover{
    cursor:pointer;
  }
  @media (min-width: 768px) {
    display:none;
  }
`;

export default Header;
