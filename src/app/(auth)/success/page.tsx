import Image from 'next/image'
import logoPNG from '@/assets/png/logo.png'
import styles from './page.module.scss'
import View from './view'
import { cls } from '@/common/utils/classnames'
import { customFetch } from '@/client/services/interceptor/fetch'
import { Suspense } from 'react'
import env from '@/configs/environment'

async function getData() {
  const res = await customFetch(`${env.hostUrl}/api/colleges/get-colleges`, {
    method: 'GET'
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch college information')
  }

  return res.json()
}

async function Success() {
  const data_colleges = await getData()

  return (
    <main className={cls('page', styles.page)}>
      <Image
        src={logoPNG}
        alt={'logo'}
        width={100}
        height={100}
        objectFit='contain'
        className={styles.logo}
      />
      <Suspense>
        <View colleges={data_colleges} />
      </Suspense>
    </main>
  )
}

export default Success
