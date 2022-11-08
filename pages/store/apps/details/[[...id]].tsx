import axios from 'axios'
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
    <LayoutStore title={props.title} description={props.sobre}>
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

  try {
    const url = `https://store-39f28-default-rtdb.firebaseio.com/aplicativos/${id?.toString().replaceAll('.', '-')}/.json`

    const { data } = await axios.get(url)

    return {
      props: {
        title: data.title,
        icon: data.icon,
        prints: data.prints,
        urlDownload: data.urlDownload,
        size: data.size,
        star: data.star,
        download: data.download,
        category: data.category,
        sobre: data.sobre
      }
    }
  } catch {
    return {
      redirect: {
        destination: '/notfound',
        permanent: false
      }
    }
  }

}
