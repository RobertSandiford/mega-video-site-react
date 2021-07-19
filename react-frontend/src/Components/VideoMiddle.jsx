
import styles from './VideoMiddle.module.css'

import Player from './Player'
import SuggestionList from './SuggestionList'

export default function VideoMiddle() {
    return (
        <div className={styles.middle}>
            <Player />
            <SuggestionList />
        </div>
    )
}