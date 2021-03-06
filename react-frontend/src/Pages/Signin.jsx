import React, { useState } from "react"
import { Link } from "react-router-dom"
import * as firebase from "../lib/firebase"


import LayoutMain from '../Layouts/LayoutMain'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault()
        firebase.auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!")
            console.error("Error signing in with password and email", error)
        })
    }

    const signInWithGoogleHandler = (event, email, password) => {
        event.preventDefault()
        firebase.signInWithGoogle()
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget

        if (name === 'userEmail') {
            setEmail(value)
        } else if (name === 'userPassword'){
            setPassword(value)
        }
    }

    return (
        <LayoutMain>
            <div>
                <h1 className="text-3xl mb-2 text-center font-bold mb-8">Sign In</h1>
                <div className="border border-blue-400 mx-auto w-11/12 rounded py-8 px-4 md:px-8">
                    
                    { error !== null &&
                        <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>
                    }

                    <form className="">
                        <label htmlFor="userEmail" className="block">Email:</label>
                        <input type="email" className="my-1 p-1 w-full"
                            name="userEmail" value = {email}
                            placeholder="E.g: faruq123@gmail.com" id="userEmail"
                            onChange = {(event) => onChangeHandler(event)}
                        />
                        <br />
                        <label htmlFor="userPassword" className="block">Password:</label>
                        <input
                            type="password" className="mt-1 mb-3 p-1 w-full"
                            name="userPassword" value = {password}
                            placeholder="Your Password" id="userPassword"
                            onChange = {(event) => onChangeHandler(event)}
                        />
                        <br />
                        <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                            onClick = {(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                            Sign in
                        </button>
                    </form>

                    <p className="text-center my-3">or</p>
                    <button className="bg-blue-500 hover:bg-blue-600 w-full py-2 text-white"
                        onClick={signInWithGoogleHandler}>
                        Sign in with Google
                    </button>
                    <p className="text-center my-3">
                        Don't have an account?{" "}
                        <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                            Sign up here
                        </Link>
                        {" "}
                        <br />
                        {" "}
                        <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
                            Forgot Password?
                        </Link>
                    </p>
                </div>
            </div>
        </LayoutMain>
    )
};