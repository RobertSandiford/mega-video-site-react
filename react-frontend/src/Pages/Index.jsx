import React from 'react'
//import styles from './Index.module.css'

import LayoutMain from '../Layouts/LayoutMain'

import VideoMiddle from '../Components/VideoMiddle'

export default function Index() {
    //const [session, loading] = useSession()

    return (
        <LayoutMain>
            <VideoMiddle />
        </LayoutMain>
    )
}
