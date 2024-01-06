import logoPng from '@/assets/png/logo.png'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import Icon from '@/components/ui/icon'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function About() {
  return (
    <main className={cls('page', styles['customer'])}>
      <Link href={ROUTE.ABOUT}>
        <Icon icon='back' size={32} color='orange' />
      </Link>
      <header>
        <Image alt='logo' src={logoPng} width={52} />
        <h2>About Cliqbite Customer</h2>
      </header>
      <article>
        <h3>Welcome to CliqBite !</h3>
        <p data-mod data-justify>
          At CliqBite, we believe that ordering food should be a convenient,
          seamless, and enjoyable experience. We are dedicated to providing you
          with a user-friendly platform that connects you with your favourite
          and culinary delights, all from the your comfort.
          <br />
          <br />
          Our mission is to revolutionize the way you order food online. We
          understand the importance of the time and quality when it comes to
          satisfying your cravings. That&apos;s why we have partnered with your
          college canteen, ensuring that you have access to a diverse range of
          cuisines and flavours, all prepared with care and can be ordered in a
          very seamless way at your comfort.
          <br />
          <br /> With CliqBite, you can say goodbye to long waiting times, busy
          phone lines, and incorrect orders. Our intuitive and easy-to-use
          interface allows you to browse menus, customize your dishes, and place
          your order with just a few clicks. Whether you&apos;re craving for
          Breakfast, Meals, Snacks, Chats, or Chinese delights, we&apos;ve got
          you covered.
          <br />
          <br /> We prioritize your satisfaction and convenience above
          everything else. That&apos;s why we offer secure online payment
          options, allowing you to pay with ease and peace of mind. We also
          provide real-time order tracking, so you can stay updated on the
          status of your delivery and anticipate its arrival. <br />
          <br /> Join us at CliqBite and discover a whole new way of online
          ordering food in prior. Whether it&apos;s a busy workday lunch, or a
          gathering with friends, we&apos;re here to satisfy your cravings and
          make your experience a memorable one. <br />
          <br />
          Thank you for choosing CliqBite. We look forward to serving you and
          bringing the flavors of your favorite cuisine at your comfort.
        </p>
      </article>
    </main>
  )
}
