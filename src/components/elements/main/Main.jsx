import { useState } from 'react'
import { DATA } from '../../../data'
import BottomNavigation from '../../UI/bottomNavigation/BottomNavigation'
import Sidebar from '../../UI/sidebar/Sidebar'
import Episodes from '../episodes/Episodes'
import Information from './Information'
import styles from './main.module.scss'

const Main = () => {
	const [isSidebarShow, setIsSidebarShow] = useState(false)
	const [activeTab, setActiveTab] = useState(1)

	return (
		<div className={styles.wrapper}>
			<Sidebar
				isSidebarShow={isSidebarShow}
				setIsSidebarShow={setIsSidebarShow}
			/>
			<div
				className={styles.main}
				style={{
					backgroundImage: `url(${DATA[0].mainImage})`,
					width: isSidebarShow ? '85%' : '90%',
				}}
			>
				{activeTab === 1 ? (
					<Information movie={DATA[0]} />
				) : (
					activeTab === 2 && <Episodes />
                )}
			</div>
			<BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	)
}

export default Main
