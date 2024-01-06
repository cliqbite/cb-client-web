import { cls } from '@/common/utils/classnames'
import Image from 'next/image'
import Link from 'next/link'
import cookieStar from '@/assets/svg/cookie-star.svg'

export default function NotFound() {
  return (
    <main className={cls('page', 'not-found')}>
      <Image
        src={cookieStar}
        alt='404-cookie'
        width={250}
        height={200}
        loading='lazy'
        className='img'
      />
      <h1 className='error-code'>404</h1>
      <h3 className='error-message'>Page Not Found!</h3>
      <p className='message'>
        We&apos;re sorry, the page you requested could not be found. Please go
        back to the homepage!
      </p>
      <Link href={'/home'} className={'redirect-link'}>
        Go Home
      </Link>
    </main>
  )
}
