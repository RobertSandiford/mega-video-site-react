import { Provider as NextAuthProvider } from 'next-auth/client'
import '../styles/globals.css'

import '../../lib/global'


function MyApp({ Component, pageProps }) {
    return (
        <NextAuthProvider session={pageProps.session}>
            <Component {...pageProps} />
        </NextAuthProvider>
    )
}
export default MyApp
