import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import '../src/firebase/firebase'
import '../styles/globals.css'

export default function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
