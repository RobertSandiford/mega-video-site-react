import React from 'react'
import { Link } from "react-router-dom"
//import styles from './NavSignedIn.module.css'
import * as firebase from '../lib/firebase'

function signOutHandler(event) {
    event.preventDefault()
    firebase.auth.signOut()
}

export default function NavSignedIn() {
    return (
        <nav>
            <Link to="/account" className="link">Account</Link>
            <span onClick={signOutHandler} className="link">Sign Out</span>
        </nav>
    )
}
