
import styles from './SuggestedVideo.module.css'

export default function SuggestedVideo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.video} />
            <p className={styles.description}>Some text</p>
        </div>
    )
}
