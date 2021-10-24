import styles from "./Header.module.scss"
import Search from "../../UI/search/Search"
import Profile from "./Profile"

const Header = () => {
    return (
    <div className={styles.header}>
    <div>
        <a href='/'>
            <img
                src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
                alt='Netflix'
                height='35'
                width='112'
            />
        </a>
        <Search />
    </div>
    <Profile />
</div>
)}
export default Header
