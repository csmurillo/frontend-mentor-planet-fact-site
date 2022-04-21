import React from 'react'
import EarthInternal from '../../../public/images/planet-earth-internal.svg';
import JupiterInternal from '../../../public/images/planet-jupiter-internal.svg';
import SaturnInternal from '../../../public/images/planet-saturn-internal.svg';
import MarsInternal from '../../../public/images/planet-mars-internal.svg';
import MercuryInternal from '../../../public/images/planet-mercury-internal.svg';
import NeptuneInternal from '../../../public/images/planet-neptune-internal.svg';
import VenusInternal from '../../../public/images/planet-venus-internal.svg';
import UranusInternal from '../../../public/images/planet-uranus-internal.svg';



const PlanetInternal = ({planet}) => {
  if(planet=='earthInternal'){
    return (
      <EarthInternal/>
    );
  }
  if(planet=='jupiterInternal'){
    return (
      <JupiterInternal/>
    );
  }
  if(planet=='saturnInternal'){
    return (
      <SaturnInternal/>
    );
  }
  if(planet=='marsInternal'){
    return (
      <MarsInternal/>
    );
  }
  if(planet=='mercuryInternal'){
    return (
      <MercuryInternal/>
    );
  }
  if(planet=='neptuneInternal'){
    return (
      <NeptuneInternal/>
    );
  }
  else if(planet=='venusInternal'){
    return (
      <VenusInternal/>
    );
  }
  else if(planet=='uranusInternal'){
    return (
      <UranusInternal/>
    );
  }
}
export default PlanetInternal;