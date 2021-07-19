import React from 'react'
import { Link } from "react-router-dom"
//import styles from './NavSignedOut.module.css'

/*
function signInHandler(event) {
    event.preventDefault()
    //signIn()
}
*/

export default function NavSignedOut() {
    return (
        <nav>
            <Link to="/signin" className="link">Sign In</Link>
            <Link to="/register" className="link">Register</Link>
        </nav>
    )
}
