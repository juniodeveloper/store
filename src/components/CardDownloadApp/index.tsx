import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsFillStarFill } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'
import styles from './CardDownloadApp.module.css'

interface ICardDownloadApp {
  title: string,
  icon: string,
  size: number,
  star: number,
  download: number,
  urlDownload: string
}

const CardDownloadApp = (props: ICardDownloadApp) => {

  const router = useRouter()

  const download = async () => {
    await router.push(props.urlDownload)
  }

  return (
    <div className={styles.card}>
      <div className={styles.appInfo}>
        <Image
          className={styles.icon}
          src={props.icon}
          alt={props.title}
          height={100}
          width={100}
          blurDataURL='small'
          placeholder="blur"
        />
        <div className={styles.textInfo}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.author}>SoftsApps</span>
          <span className={styles.info}>Contém anúncios</span>
        </div>
      </div>
      <ul className={styles.listInforApp}>
        <li>
          <div>
            <BsFillStarFill className={styles.icon} />
            <span>{props.star} avaliações</span>
          </div>
        </li>
        <div
          style={
            {
              background: 'grey',
              width: '1px',
              marginTop: '10px',
              marginBottom: '10px'
            }
          }
        />
        <li>
          <div>
            <Image
              className={styles.icon}
              src='/classification_L.svg'
              alt="classification"
              height={18}
              width={18}
            />
            <span>Classificação Livre</span>
          </div>
        </li>
        <div
          style={
            {
              background: 'grey',
              width: '1px',
              marginTop: '10px',
              marginBottom: '10px'
            }
          }
        />
        <li>
          <div>
            <FiDownload className={styles.icon} />
            <span>{props.size} MB</span>
          </div>
        </li>
        <div
          style={
            {
              background: 'grey',
              width: '1px',
              marginTop: '10px',
              marginBottom: '10px'
            }
          }
        />
        <li>
          <div>
            <h4>Mais de {props.download}</h4>
            <span>Downloads</span>
          </div>
        </li>
      </ul>
      <button onClick={download}>Download</button>
    </div>
  )
}

export default CardDownloadApp
