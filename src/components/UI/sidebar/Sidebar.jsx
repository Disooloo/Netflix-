import styles from './Sidebar.module.scss'

const Sidebar = ({isSidebarShow, setIsSidebarShow}) => {

    const menu = [
        'Popular', 'TV Show', 'Films', 'My list'
    ]

    return (
        <div className={styles.sidebar} style={{width: isSidebarShow ? '30%' : '15%'}}>
        <button onClick={()=> setIsSidebarShow(!isSidebarShow)}>
            <i className={`bx bx-${isSidebarShow ? 'x' : 'menu'}`}></i>
        </button>
            <ul className={isSidebarShow ? styles.show : ''}>
                {menu.map(title => (
                    <li><a> {title} </a></li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar
