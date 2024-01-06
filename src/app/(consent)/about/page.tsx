import logoPng from '@/assets/png/logo.png'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import Navigation from '@/components/Navigation'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function About() {
  return (
    <main className={cls('page', styles['about'])}>
      <header>
        <Image alt='logo' src={logoPng} width={52} />
        <h1>About Us</h1>
      </header>
      <article>
        <h3 data-vision>
          <Icon icon='binoculars' size={24} />
          CliqBite Vision
        </h3>

        <p data-mod data-justify>
          CliqBite&apos;s unwavering vision is to empower hotel merchants with a
          smart digital platform, simplifying canteen/hotel management,
          enhancing efficiency, and ensuring quality. Our dedication to
          improving merchant experiences brings both time and cost savings,
          contributing to seamless operations and elevated service.
        </p>
        {/* <p>CliqBite was founded on 2024</p> */}
      </article>

      <article>
        <h4>CliqBite for Merchant</h4>

        <p data-mod data-justify>
          CliqBite empowers canteen merchants with an innovative food ordering
          app, streamlining operations and enhancing customer experience. From
          real-time menu management to secure payments, inventory control,
          robust support, and many more. CliqBite is a comprehensive solution
          fostering growth and excellence in the food industry.
        </p>
        <Link
          href={ROUTE.ABOUT_MERCHANT}
          // target='_blank'
          // rel='noopener noreferrer'
          passHref
        >
          <Button btn='outline'>Read More</Button>
        </Link>
      </article>
      <article>
        <h4>CliqBite for Customer</h4>

        <p data-mod data-justify>
          CliqBite welcomes you to a revolution in online food ordering.
          Partnered with canteens, our user-friendly platform offers diverse
          cuisines for a seamless experience. Say goodbye to wait times; enjoy
          secure payments, real-time tracking, and delightful dining. Join us
          for a memorable culinary journey!
        </p>
      </article>
      <Link
        href={ROUTE.ABOUT_CUSTOMER}
        // target='_blank'
        // rel='noopener noreferrer'
        passHref
      >
        <Button btn='outline'>Read More</Button>
      </Link>
      <Navigation active='profile' />
    </main>
  )
}
