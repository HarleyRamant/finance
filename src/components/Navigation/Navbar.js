//Functionalities
import React, {useState} from 'react'

//Css
import styles from './Navbar.module.css'

//Components


//Function
function Navbar(props) {

    const [navbar, setNavbar] = useState(false)
    const navbarHandler = () => {
        setNavbar(!navbar)
    }


    return (
        <nav className={`${styles.navbar} ${navbar && styles.navbarActive}`}>
            <div className={styles.hamburger} onClick={navbarHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.title}>
                Page Title
            </div>
            <div className={styles.button}>
                Add
            </div>
        </nav>
    )
}
export default Navbar