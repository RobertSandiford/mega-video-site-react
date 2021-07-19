//import logo from './logo.svg'
import './styles/App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import UserProvider from "./Providers/UserProvider"

import Index from './Pages/Index'
import Account from './Pages/Account'
import Upload from './Pages/Upload'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Register from './Pages/Register'
import ResetPassword from './Pages/ResetPassword'

function App() {
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Index />
                    </Route>
                    <Route exact path="/account">
                        <Account />
                    </Route>
                    <Route exact path="/signin">
                        <Signin />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/reset">
                        <ResetPassword />
                    </Route>
                    <Route exact path="/upload">
                        <Upload />
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
    )
}

export default App
