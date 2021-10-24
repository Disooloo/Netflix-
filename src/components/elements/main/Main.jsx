import React from 'react'
import { DATA } from '../../../data'

import BottomNavigation from '../../UI/bottomNavigation/BottomNavigation'
import Sidebar from '../../UI/sidebar/Sidebar'
import Information from './Information'
import styles from './main.module.scss'

const Main = () => {
    return (
        <div>
            <Sidebar />
            <div styles={{}}>
                <Information movie={DATA[0]} />
                <BottomNavigation />
            </div>
        </div>
       
    )
}

export default Main
