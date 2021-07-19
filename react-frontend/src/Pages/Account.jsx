import { React, useContext } from 'react'
import { Redirect } from 'react-router-dom'
//import styles from './Account.module.css'
import { UserContext } from '../Providers/UserProvider'

import LayoutMain from '../Layouts/LayoutMain'


export default function Account() {

    const user = useContext(UserContext)
    console.log("user", user)

    if ( user === undefined || user === null ) return <Redirect to='/' />

    return (
        <LayoutMain>
            <h1>My Account</h1>
            <p>{user.displayName}</p>
            <img src={user.photoURL} alt="User icon" />
        </LayoutMain>
    )
}
