
import styles from './LayoutMain.module.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function LayoutMain(props) {
    return (
        <div className={styles.container}>
            {/*<Head>
                <title>Mega | Watch</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>*/}

            <Header />

            <main className={styles.main}>
                {props.children}
            </main>

            <Footer />
        </div>
    )
}
