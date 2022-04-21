import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

const PlanetImageContext = ()=>{

    const [displayImage, setDisplayImage]=useState('mobile');

    useEffect(()=>{
        const windowResize=()=>{
        if(window.innerWidth>1400){
            setDisplayImage('desktop');
        }
        else if(window.innerWidth>=768){
            setDisplayImage('tablet');
        }
        else if(window.innerWidth<768){
            setDisplayImage('mobile');
        }
        };
        windowResize();
        window.addEventListener('resize',windowResize);

        ()=>{
        window.removeEventListener('resize',windowResize);
        }
    },[]);

    return {displayImage};
};

export {PlanetImageContext};