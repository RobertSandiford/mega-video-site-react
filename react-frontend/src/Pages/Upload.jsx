import { useContext } from 'react'
//import styles from './Upload.module.css'
import { UserContext } from '../Providers/UserProvider'

import LayoutMain from '../Layouts/LayoutMain'
import Form from '../Components/upload/Form'


export default function Upload() {
    //const [session, loading] = useSession()
    
    const user = useContext(UserContext)
    
    if ( user === undefined || user === null ) {
        return (
            <LayoutMain>
                <p>You are not signed in.</p>
            </LayoutMain>
        )
    } else {
        return (
            <LayoutMain>
                <Form />
            </LayoutMain>
        )
    }
}
