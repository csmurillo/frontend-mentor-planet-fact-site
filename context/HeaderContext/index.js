import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

const HeaderContext = ()=>{

    const [menu,setMenu]=useState(false);
    const dynamicRoute = useRouter().asPath;

    const menuToggle = ()=>{
        setMenu(!menu);
    };

    useEffect(()=>{
        setMenu(false);
    },[dynamicRoute]);

    return {menu,menuToggle};
};

export {HeaderContext};