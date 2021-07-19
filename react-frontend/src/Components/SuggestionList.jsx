
import styles from './SuggestionList.module.css'

import SuggestedVideo from './SuggestedVideo'
//const SuggestedVideo = component('SuggestedVideo')

export default function Player() {
    return (
        <div className={styles.list}>
            <SuggestedVideo />
            <SuggestedVideo />
            <SuggestedVideo />
        </div>
    )
}
