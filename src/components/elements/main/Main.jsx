import React, { useState } from 'react'
import { DATA } from '../../../data'

import BottomNavigation from '../../UI/bottomNavigation/BottomNavigation'
import Sidebar from '../../UI/sidebar/Sidebar'
import Information from './Information'
import styles from './main.module.scss'

const Main = () => {

    const [isSidebarShow, setIsSidebarShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow} />
            
            <div
            className={styles.main} 
            styles={{backgroundImage: `url(${DATA[0].mainImage})`,
            width: isSidebarShow ? '70%' : '85%'}}>
            
                <Information movie={DATA[0]} />
                <BottomNavigation />
            </div>
        </div>
       
    )
}

export default Main
