import { getDatabase, onValue, ref } from 'firebase/database'
import { NextPageContext } from 'next'
import Image from 'next/image'
import CardDownloadApp from '../../../../src/components/CardDownloadApp'
import LayoutStore from '../../../../src/layouts/LayoutStore'
import styles from '../../../../styles/pages/AppDownload.module.css'

interface IAppDownload {
  title: string,
  icon: string,
  size: number,
  star: number,
  download: number,
  urlDownload: string,
  sobre: string,
  category: string,
  prints: Array<string>
}

export default function AppDownload (props: IAppDownload) {
  return (
    <LayoutStore title='tete' description='tetetetet'>
      <div className={styles.page}>
        <CardDownloadApp
          title={props.title}
          icon={props.icon}
          size={props.size}
          star={props.star}
          download={props.download}
          urlDownload={props.urlDownload}
        />
        <ul className={styles.listPrints}>{
          props.prints.map((value, index) => {
            return (
              <li key={index} className={styles.cardImg}>
                <Image
                  src={value}
                  alt={`Print ${index}`}
                  height={350}
                  width={200}
                  blurDataURL='small'
                  placeholder="blur"
                />
              </li>
            )
          })
        }
        </ul>
        <div>
          <h2>Sobre este app</h2>
          <span className={styles.sobre}>{props.sobre}</span>
        </div>
        <div className={styles.category}>
          <span>{props.category}</span>
        </div>
      </div>
    </LayoutStore>
  )
}

export async function getServerSideProps (ctx: NextPageContext) {

  const { id } = ctx.query

  if (!id) {
    return {
      redirect: {
        destination: '/notfound',
        permanent: false
      }
    }
  }

  const db = getDatabase()

  const starCountRef = ref(db, 'aplicativos/' + id?.toString().replaceAll('.', '-'))
  let app: any
  onValue(starCountRef, (snapshot) => { app = snapshot.val() })
  console.log(app.title)

  return {
    props: {
      title: app.title,
      icon: app.icon,
      prints: app.prints,
      urlDownload: app.urlDownload,
      size: app.size,
      star: app.star,
      download: app.download,
      category: app.category,
      sobre: app.sobre
    }
  }

}
