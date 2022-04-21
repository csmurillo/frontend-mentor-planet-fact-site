import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

const PlanetMainContext = (overview,structure, geology)=>{

    const [currentToggle,setCurrentToggle]=useState('overview');
    const [currentPlanetInformation, setCurrentPlanetInformation]=useState('');

    const dynamicRoute = useRouter().asPath;

    const informationToggle = (planetInformation)=>{
        if(planetInformation=='overview'){
            setCurrentPlanetInformation(overview);
            setCurrentToggle('overview');
        }
        else if(planetInformation=='structure'){
            setCurrentPlanetInformation(structure);
            setCurrentToggle('structure');
        }
        else if(planetInformation=='geology'){
            setCurrentPlanetInformation(geology);
            setCurrentToggle('geology');
        }
    };
    useEffect(()=>{
        setCurrentPlanetInformation(overview);
    },[]);
    useEffect(()=>{
        setCurrentToggle('overview');
        setCurrentPlanetInformation(overview);
    },[dynamicRoute]);

    return {currentToggle,currentPlanetInformation,informationToggle};
};

export {PlanetMainContext};