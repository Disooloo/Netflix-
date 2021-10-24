import styles from './button.module.scss'

const Button = ({children, cd}) => {
    return (
        <button onClick={cd} className={styles.button}>
            {children}
        </button>
    )
}

export default Button
