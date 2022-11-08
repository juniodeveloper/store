import LayoutStore from '../src/layouts/LayoutStore'
import styles from '../styles/pages/Home.module.css'

export default function Home () {
  return (
    <LayoutStore title='MyStore' description='Baixe os melhores aplicativos totalmente grátis.'>
      <div className={styles.home}>

      </div>
    </LayoutStore>
  )
}
