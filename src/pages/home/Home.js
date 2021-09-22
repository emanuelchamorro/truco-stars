import React from 'react'
import {HeroSection}  from '../../components/heroSection/HeroSection'
import {CardsSectionHome}  from '../../components/cardsSectionHome/CardsSectionHome'
import {homeObjComoJugar} from './Data'

export const  Home = () => {
    return (
        <div>
            <HeroSection {...homeObjComoJugar} />
            <CardsSectionHome />
        </div>
    )
}

