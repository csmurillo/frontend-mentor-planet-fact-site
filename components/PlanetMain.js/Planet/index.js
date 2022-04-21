import React from 'react'
import Earth from '../../../public/images/planet-earth.svg';
import Jupiter from '../../../public/images/planet-jupiter.svg';
import Saturn from '../../../public/images/planet-saturn.svg';
import Mars from '../../../public/images/planet-mars.svg';
import Mercury from '../../../public/images/planet-mercury.svg';
import Neptune from '../../../public/images/planet-neptune.svg';
import Venus from '../../../public/images/planet-venus.svg';
import Uranus from '../../../public/images/planet-uranus.svg';



const Planet = ({planet}) => {
  if(planet=='earth'){
    return (
      <Earth/>
    );
  }
  if(planet=='jupiter'){
    return (
      <Jupiter/>
    );
  }
  if(planet=='saturn'){
    return (
      <Saturn/>
    );
  }
  if(planet=='mars'){
    return (
      <Mars/>
    );
  }
  if(planet=='mercury'){
    return (
      <Mercury/>
    );
  }
  if(planet=='neptune'){
    return (
      <Neptune/>
    );
  }
  else if(planet=='venus'){
    return (
      <Venus/>
    );
  }
  else if(planet=='uranus'){
    return (
      <Uranus/>
    );
  }
}
export default Planet;