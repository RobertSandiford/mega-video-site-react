
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from "../Providers/UserProvider"
//import firebase from "../lib/firebase"
import styles from './Nav.module.css'

import NavSignedIn from './NavSignedIn'
import NavSignedOut from './NavSignedOut'

export default function Nav() {
    
    const user = useContext(UserContext)

    console.log(user, user !== undefined)
    
    return (
        <div className={styles.container}>

            <nav>
                <Link to="/" className="link">Watch</Link>
                <Link to="/upload" className={styles.link}>Upload</Link>
            </nav>

            { ( user === undefined || user === null )
                ? <NavSignedOut />
                : <NavSignedIn />
            }
            
        </div>
    )
}
