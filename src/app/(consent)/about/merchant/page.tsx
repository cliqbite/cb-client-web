import logoPng from '@/assets/png/logo.png'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import Icon from '@/components/ui/icon'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function About() {
  return (
    <main className={cls('page', styles['merchant'])}>
      <Link href={ROUTE.ABOUT}>
        <Icon icon='back' size={32} color='orange' />
      </Link>
      <header>
        <Image alt='logo' src={logoPng} width={52} />
        <h2>About Cliqbite Merchant</h2>
      </header>
      <h3>Welcome to CliqBite Merchant Services!</h3>
      <p data-mod data-justify>
        At CliqBite, we understand the challenges faced by college canteen
        merchants in managing their operations effectively and providing a
        seamless dining experience for their customers/students. That&apos;s why
        we have developed an innovative online food ordering application that
        empowers merchants to take control of the business and streamline the
        operations.
        <br />
        <br />
        Our mission is to provide an comprehensive suite of tools and features
        that simplify and enhance your day-to-day activities. With CliqBite, you
        can manage your orders, track your sales, and gain valuable insights
        into your business performance. We are here to support you every step of
        the way, so you can focus on what you do best - serving delicious food
        to your customers. With our user-friendly platform, canteen&apos;s can
        easily set up the menu, add new items, and update pricing in real-time.
        Our advanced inventory management system ensures that canteen will never
        run out of stock, enabling to serve the customers/students without any
        interruptions. Merchant can also track customer details, such as their
        preferences and order history, allowing canteen to personalize their
        dining experience and build long-lasting relationships.
        <br />
        <br />
        One of the key features of CliqBite is our hassle-free payment
        management system. We provide secure and fast payment processing,
        allowing the customers/students to make payments effortlessly. With our
        integrated cash flow management, canteen&apos;s can easily track the
        total revenue, manage refunds, and ensure accurate financial reporting.
        <br />
        <br /> CliqBite also offers a robust customer support system to address
        any queries or concerns of the customers/students. We believe in
        providing exceptional service and strive to maintain high customer
        satisfaction levels. <br />
        <br />
        As a merchant using CliqBite, you will have access to a dedicated
        merchant portal where you can access comprehensive reports, analyze
        sales data, and make informed business decisions. Our goal is to empower
        you with the tools and insights you need to drive growth and
        profitability. <br />
        <br />
        Join CliqBite Merchant Services today and revolutionize your food
        business. Experience the convenience, efficiency, and control that our
        platform provides. We are committed to your success and look forward to
        partnering with you on your journey to excellence in the food industry.
        <br />
        <br /> For any inquiries or assistance, please don&apos;t hesitate to
        reach out to our friendly support team. We are here to help you thrive.
        <br />
        <br />
        Thank you for choosing <i>CliqBite Merchant Services</i>.
        <br />
        <br />
        Sincerely, <br /> <strong>The CliqBite Team</strong>
      </p>
    </main>
  )
}
