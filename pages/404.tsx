import Image from 'next/image'
import LayoutStore from '../src/layouts/LayoutStore'
import styles from '../styles/pages/NotFound.module.css'

const NotFount = () => {
  return (
    <LayoutStore title="Not Found" description='Página não encontrada'>
      <Image
        className={styles.img}
        src="/page-not-found.svg"
        alt="Page not found"
        width={400}
        height={300}
      />
      <h2 className={styles.title}>Página não encontrada</h2>
    </LayoutStore>
  )
}

export default NotFount
