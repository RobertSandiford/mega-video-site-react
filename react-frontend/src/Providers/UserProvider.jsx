import { React, Component, createContext } from 'react'
import * as firebase from '../lib/firebase'

export const UserContext = createContext({ user: null })

export default class UserProvider extends Component {
    state = { user: null }

    componentDidMount = () => {
        firebase.auth.onAuthStateChanged( async (userAuth) => {
            const user = await firebase.generateUserDocument(userAuth)
            this.setState({ user })
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}