import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navigation.module.css'

const Navigation = () => {

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.logo} href="/">
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            priority={true}
            width={55}
            height={55}
          />
          <strong>MyStore</strong>
        </Link>
        <Avatar
          className={styles.avatar}
          size={45}
          icon={<UserOutlined />}
        />
      </nav>
    </header>
  )
}

export default Navigation
