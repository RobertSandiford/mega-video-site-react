
import styles from './Header.module.css'

import Nav from './Nav'

export default function Header() {
    return (
        <div className="header">

            <h1 className={styles.title}>
                Mega video site!
            </h1>

            <div className={styles.nav}>
                <Nav />
            </div>
            
        </div>
    )
}
