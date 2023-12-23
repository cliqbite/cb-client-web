'use client'
import { useNavigation } from '@/client/store/useNavigation'
import { cls } from '@/common/utils/classnames'
import Link from 'next/link'
import { type FC } from 'react'
import Icon from '../ui/icon'
import styles from './style.module.scss'

interface IMerchantNavigation {
  enableAside?: boolean
}

const MerchantNavigation: FC<IMerchantNavigation> = ({}) => {
  const isAsideOpen = useNavigation((state) => state.isAsideOpen)
  const toggleAside = useNavigation((state) => state.toggleAside)

  return (
    <aside
      className={cls(styles.merchant, !isAsideOpen && styles.visibility)}
      ref={null}
    >
      <button className={cls(styles.close)} onClick={() => toggleAside()}>
        <Icon icon='cross' color='white' size={20} />
      </button>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <p>analytics and orders</p>
          </li>
          <li>
            <Link href={'/merchant'}>Dashboard</Link>
          </li>
          <li>
            <Link href={'/merchant/orders'}>Orders</Link>
          </li>
          <li>
            <Link href={'#'}>Order history</Link>
          </li>
        </ul>
        <ul>
          <li>
            <p>admin controls</p>
          </li>
          <li>
            <Link href={'#'}>Users</Link>
          </li>
          <li>
            <Link href={'#'}>Food Inventory</Link>
          </li>
          <li>
            <Link href={'#'}>Reports</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
export default MerchantNavigation

const Logo = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='88'
      height='32'
      viewBox='0 0 88 32'
      fill='none'
    >
      <path
        d='M20.4891 9.7297C20.4942 9.81439 20.5021 9.89926 20.5128 9.98422C20.5864 10.5703 20.7778 11.1003 21.0564 11.5596C20.9471 12.0942 20.9893 12.6677 21.2139 13.2142C21.6076 14.1721 22.3976 14.7389 23.2569 14.9065C23.256 14.9975 23.2611 15.0892 23.2727 15.1812C23.4229 16.3776 24.541 17.1129 25.6176 16.9041L26.2223 24.3931C26.2755 25.0521 25.5303 25.4627 25.0108 25.0607L14.7531 17.1224C14.3983 16.8478 14.356 16.3235 14.662 15.9944L20.4891 9.7297Z'
        fill='#FFA500'
      />
      <path
        d='M24.7241 11.8818C24.7241 12.0925 24.5551 12.2632 24.3466 12.2632C24.1381 12.2632 23.9691 12.0925 23.9691 11.8818C23.9691 11.6712 24.1381 11.5005 24.3466 11.5005C24.5551 11.5005 24.7241 11.6712 24.7241 11.8818Z'
        fill='#FFA500'
      />
      <path
        d='M28.4987 10.7377C28.4987 11.0536 28.2452 11.3098 27.9325 11.3098C27.6198 11.3098 27.3663 11.0536 27.3663 10.7377C27.3663 10.4217 27.6198 10.1656 27.9325 10.1656C28.2452 10.1656 28.4987 10.4217 28.4987 10.7377Z'
        fill='#FFA500'
      />
      <path
        d='M30.1973 7.40055C30.1973 7.92714 29.7748 8.35402 29.2537 8.35402C28.7325 8.35402 28.31 7.92714 28.31 7.40055C28.31 6.87397 28.7325 6.44708 29.2537 6.44708C29.7748 6.44708 30.1973 6.87397 30.1973 7.40055Z'
        fill='#FFA500'
      />
      <path
        d='M32.4621 9.11679C32.4621 9.43274 32.2086 9.68887 31.8959 9.68887C31.5832 9.68887 31.3297 9.43274 31.3297 9.11679C31.3297 8.80084 31.5832 8.54471 31.8959 8.54471C32.2086 8.54471 32.4621 8.80084 32.4621 9.11679Z'
        fill='#FFA500'
      />
      <path
        d='M36.922 23.5422C36.9081 23.6121 36.8943 23.6821 36.8804 23.7521C36.8804 23.8081 36.8804 23.871 36.8804 23.941L36.7558 24.3818C36.7281 24.4378 36.7073 24.4728 36.6935 24.4868L36.6311 24.6127C36.5619 24.7667 36.4372 24.8926 36.2572 24.9906C35.9247 25.1585 35.5716 25.2005 35.1976 25.1165C34.9621 25.0885 34.7752 25.0186 34.6367 24.9066C34.4981 24.8087 34.4012 24.6897 34.3458 24.5498C34.2904 24.4098 34.2488 24.2699 34.2211 24.1299C34.1796 23.99 34.1588 23.864 34.1588 23.7521V11.9968C34.1588 11.8989 34.1588 11.8149 34.1588 11.7449C34.1727 11.661 34.1865 11.584 34.2004 11.514C34.2142 11.4161 34.2281 11.3321 34.2419 11.2621C34.2696 11.1921 34.2973 11.1152 34.325 11.0312C34.3666 10.8913 34.4427 10.7793 34.5536 10.6953C34.7198 10.5694 34.879 10.4994 35.0314 10.4854C35.1283 10.4574 35.2184 10.4434 35.3015 10.4434C35.3846 10.4295 35.4815 10.4225 35.5923 10.4225C35.7862 10.4225 36.0079 10.4784 36.2572 10.5904C36.4511 10.7023 36.5896 10.8563 36.6727 11.0522C36.8112 11.3321 36.8804 11.591 36.8804 11.8289C36.8943 11.9688 36.9012 12.1787 36.9012 12.4586C36.9151 12.7385 36.922 12.9484 36.922 13.0884V13.1723C36.9497 13.6202 36.9635 14.054 36.9635 14.4738C36.9635 14.8797 36.9566 15.3275 36.9428 15.8173C36.9428 16.2931 36.9358 16.7549 36.922 17.2027C36.922 17.6365 36.922 18.0704 36.922 18.5042V22.9124C36.922 22.9684 36.922 23.0244 36.922 23.0803C36.9358 23.1223 36.9428 23.1713 36.9428 23.2273C36.9428 23.3672 36.9358 23.4722 36.922 23.5422Z'
        fill='#CF313E'
      />
      <path
        d='M41.2401 17.2657C41.2401 17.6575 41.2401 18.0984 41.2401 18.5882C41.2539 19.078 41.2609 19.5888 41.2609 20.1205C41.2609 20.6383 41.2609 21.1561 41.2609 21.6739C41.2609 22.1777 41.2539 22.6465 41.2401 23.0803C41.2262 23.2903 41.2055 23.5212 41.1778 23.7731C41.1501 24.011 41.0947 24.2349 41.0116 24.4448C40.9285 24.6547 40.7969 24.8296 40.6168 24.9696C40.4506 25.0955 40.2221 25.1515 39.9312 25.1375C39.5019 25.1095 39.1902 24.9206 38.9963 24.5707C38.8163 24.2209 38.7124 23.7311 38.6847 23.1013C38.6847 22.7795 38.6778 22.4086 38.6639 21.9888C38.6639 21.569 38.657 21.1421 38.6431 20.7083C38.6431 20.2745 38.6431 19.8547 38.6431 19.4488C38.6431 19.029 38.6431 18.6511 38.6431 18.3153C38.6431 18.1194 38.6362 17.8814 38.6224 17.6016C38.6224 17.3217 38.6293 17.0348 38.6431 16.7409C38.657 16.447 38.6916 16.1671 38.747 15.9012C38.8024 15.6214 38.8924 15.3905 39.0171 15.2085C39.114 15.0966 39.2525 15.0126 39.4326 14.9566C39.6127 14.8867 39.7996 14.8517 39.9935 14.8517C40.2013 14.8517 40.3952 14.8867 40.5753 14.9566C40.7692 15.0266 40.9077 15.1246 40.9908 15.2505C41.0462 15.3345 41.0877 15.4534 41.1154 15.6074C41.1431 15.7613 41.1639 15.9362 41.1778 16.1322C41.2055 16.3141 41.2193 16.51 41.2193 16.7199C41.2332 16.9158 41.2401 17.0978 41.2401 17.2657ZM40.4506 13.0254C40.0213 13.1374 39.6611 13.0954 39.3703 12.8995C39.0933 12.6895 38.9201 12.3817 38.8509 11.9758C38.7955 11.6819 38.8163 11.4231 38.9132 11.1991C39.0102 10.9752 39.1556 10.8073 39.3495 10.6953C39.5434 10.5694 39.765 10.5134 40.0143 10.5274C40.2636 10.5414 40.5129 10.6394 40.7623 10.8213C40.9977 10.9892 41.1639 11.1851 41.2609 11.4091C41.3717 11.633 41.4063 11.8499 41.3647 12.0598C41.3371 12.2697 41.247 12.4656 41.0947 12.6476C40.9423 12.8155 40.7276 12.9414 40.4506 13.0254Z'
        fill='#CF313E'
      />
      <path
        d='M45.2471 23.7941C44.4576 23.4442 43.8897 22.9404 43.5434 22.2827C43.211 21.6249 43.0587 20.9182 43.0864 20.1625C43.1141 19.5188 43.2595 18.889 43.5227 18.2733C43.7997 17.6575 44.1598 17.1258 44.603 16.6779C44.7969 16.482 44.9908 16.3141 45.1847 16.1741C45.3925 16.0202 45.6141 15.8942 45.8496 15.7963C46.0158 15.7263 46.2304 15.6493 46.4936 15.5654C46.7706 15.4674 47.0684 15.3765 47.387 15.2925C47.7194 15.2085 48.0656 15.1386 48.4258 15.0826C48.7859 15.0266 49.1321 14.9986 49.4645 14.9986C49.9493 14.9846 50.3787 15.0476 50.7526 15.1875C51.1266 15.3135 51.3759 15.5514 51.5006 15.9012L51.6252 16.405C51.6529 16.503 51.6668 16.601 51.6668 16.6989C51.6668 16.7829 51.6668 16.8669 51.6668 16.9508V28.6431C51.6668 28.7131 51.6598 28.7761 51.646 28.832C51.646 28.902 51.6391 28.972 51.6252 29.0419C51.5698 29.1819 51.5213 29.3428 51.4798 29.5248C51.3967 29.7067 51.2997 29.8396 51.1889 29.9236C51.0643 30.0495 50.8911 30.1195 50.6695 30.1335C50.2956 30.2455 49.9562 30.2105 49.6515 30.0285C49.4853 29.9026 49.3607 29.7557 49.2776 29.5877C49.236 29.5457 49.2152 29.5038 49.2152 29.4618C49.2014 29.4478 49.1875 29.4268 49.1737 29.3988C49.1737 29.3848 49.1668 29.3638 49.1529 29.3358C49.1252 29.2519 49.0975 29.1679 49.0698 29.0839C49.056 29.014 49.049 28.937 49.049 28.853C49.0213 28.6711 49.0005 28.4822 48.9867 28.2863C48.9867 28.1043 48.9867 27.9154 48.9867 27.7195V24.5707C48.9451 24.5568 48.8759 24.5498 48.7789 24.5498C48.5019 24.5078 48.1695 24.4728 47.7817 24.4448C47.4077 24.4028 47.0822 24.3468 46.8052 24.2769C46.2928 24.1789 45.7734 24.018 45.2471 23.7941ZM48.4465 18.0424C48.1141 18.0844 47.7817 18.1473 47.4493 18.2313C47.1169 18.3013 46.8191 18.4202 46.5559 18.5882C46.2928 18.7421 46.085 18.959 45.9327 19.2389C45.7942 19.5048 45.7457 19.8686 45.7872 20.3305C45.8288 20.6803 45.9534 20.9602 46.1612 21.1701C46.3828 21.38 46.646 21.548 46.9507 21.6739C47.2692 21.7999 47.6016 21.8908 47.9479 21.9468C48.308 22.0028 48.6543 22.0378 48.9867 22.0518C48.9728 21.38 48.9659 20.7013 48.9659 20.0156C48.9659 19.3299 48.9728 18.6651 48.9867 18.0214C48.8759 18.0214 48.772 18.0214 48.6751 18.0214C48.5781 18.0214 48.5019 18.0284 48.4465 18.0424Z'
        fill='#CF313E'
      />
      <path
        d='M61.5174 17.4756C61.9191 17.7415 62.2584 18.0564 62.5354 18.4202C62.8263 18.7701 63.0548 19.2039 63.221 19.7217C63.4011 20.2955 63.4911 20.8762 63.4911 21.464C63.5049 22.0378 63.4011 22.5766 63.1795 23.0803C62.9717 23.5702 62.6324 24.004 62.1615 24.3818C61.7044 24.7457 61.1019 25.0046 60.354 25.1585C59.9523 25.2565 59.4814 25.3334 58.9412 25.3894C58.401 25.4454 57.9163 25.4734 57.4869 25.4734C56.9467 25.4874 56.3858 25.4874 55.8041 25.4734C55.2362 25.4734 54.6822 25.4174 54.142 25.3055C53.9065 25.2355 53.7334 25.1165 53.6226 24.9486C53.5257 24.7667 53.4564 24.5638 53.4149 24.3398C53.3595 24.2139 53.3317 24.0879 53.3317 23.962V12.0388C53.3317 11.647 53.4079 11.3461 53.5603 11.1362C53.7265 10.9123 53.9412 10.7513 54.2043 10.6534C54.4675 10.5414 54.7653 10.4784 55.0977 10.4644C55.4301 10.4365 55.7764 10.4225 56.1365 10.4225C56.4135 10.4225 56.6905 10.4225 56.9675 10.4225C57.2584 10.4085 57.5492 10.4085 57.8401 10.4225C58.2972 10.4365 58.7681 10.4784 59.2528 10.5484C59.7515 10.6044 60.2224 10.7163 60.6656 10.8843C60.8734 10.9542 61.095 11.0522 61.3304 11.1782C61.5659 11.2901 61.7529 11.43 61.8914 11.598C62.3346 12.0038 62.6601 12.4796 62.8678 13.0254C63.0894 13.5572 63.1864 14.103 63.1587 14.6627C63.131 15.2085 62.9786 15.7333 62.7016 16.2371C62.4385 16.7409 62.0437 17.1537 61.5174 17.4756ZM57.8816 23.0384C58.311 23.0104 58.7473 22.9614 59.1905 22.8914C59.6337 22.8215 59.9384 22.6885 60.1047 22.4926C60.2847 22.2687 60.4094 22.0098 60.4786 21.7159C60.5617 21.408 60.5825 21.1001 60.5409 20.7923C60.5132 20.4704 60.4232 20.1695 60.2709 19.8896C60.1323 19.5958 59.9454 19.3648 59.7099 19.1969C59.3913 18.945 59.0243 18.7841 58.6088 18.7141C58.1933 18.6301 57.7847 18.5882 57.383 18.5882C57.1891 18.5882 57.0091 18.5952 56.8429 18.6092C56.6905 18.6092 56.552 18.6301 56.4273 18.6721C56.3165 18.7001 56.2334 18.7631 56.178 18.8611C56.1226 18.959 56.0949 19.106 56.0949 19.3019C56.1226 19.6657 56.1226 20.0296 56.0949 20.3934C56.0672 20.7573 56.0534 21.1071 56.0534 21.443C56.0534 21.6389 56.0465 21.8558 56.0326 22.0937C56.0326 22.3177 56.1088 22.5066 56.2611 22.6605C56.4135 22.8145 56.6351 22.9194 56.926 22.9754C57.2168 23.0314 57.5354 23.0524 57.8816 23.0384ZM58.2972 12.9624C57.8678 12.9484 57.5077 12.9414 57.2168 12.9414C56.9398 12.9274 56.7182 12.9484 56.552 13.0044C56.3996 13.0464 56.2888 13.1514 56.2196 13.3193C56.1642 13.4732 56.1434 13.7111 56.1573 14.033C56.1573 14.2989 56.1503 14.5648 56.1365 14.8307C56.1365 15.0826 56.1365 15.3345 56.1365 15.5864C56.1365 15.8663 56.2265 16.0762 56.4066 16.2161C56.5866 16.3421 56.8082 16.419 57.0714 16.447C57.3484 16.475 57.6323 16.475 57.9232 16.447C58.2279 16.419 58.4911 16.3841 58.7127 16.3421C59.2113 16.2581 59.5922 16.0902 59.8553 15.8383C60.1324 15.5724 60.2916 15.1875 60.3332 14.6837C60.3886 14.054 60.2224 13.6202 59.8346 13.3823C59.4606 13.1304 58.9481 12.9904 58.2972 12.9624Z'
        fill='#CF313E'
      />
      <path
        d='M67.5141 17.2657C67.5141 17.6575 67.5141 18.0984 67.5141 18.5882C67.528 19.078 67.5349 19.5888 67.5349 20.1205C67.5349 20.6383 67.5349 21.1561 67.5349 21.6739C67.5349 22.1777 67.528 22.6465 67.5141 23.0803C67.5003 23.2903 67.4795 23.5212 67.4518 23.7731C67.4241 24.011 67.3687 24.2349 67.2856 24.4448C67.2025 24.6547 67.0709 24.8296 66.8909 24.9696C66.7246 25.0955 66.4961 25.1515 66.2053 25.1375C65.7759 25.1095 65.4642 24.9206 65.2703 24.5707C65.0903 24.2209 64.9864 23.7311 64.9587 23.1013C64.9587 22.7795 64.9518 22.4086 64.9379 21.9888C64.9379 21.569 64.931 21.1421 64.9172 20.7083C64.9172 20.2745 64.9172 19.8547 64.9172 19.4488C64.9172 19.029 64.9172 18.6511 64.9172 18.3153C64.9172 18.1194 64.9102 17.8814 64.8964 17.6016C64.8964 17.3217 64.9033 17.0348 64.9172 16.7409C64.931 16.447 64.9656 16.1671 65.021 15.9012C65.0764 15.6214 65.1665 15.3905 65.2911 15.2085C65.3881 15.0966 65.5266 15.0126 65.7066 14.9566C65.8867 14.8867 66.0737 14.8517 66.2676 14.8517C66.4753 14.8517 66.6693 14.8867 66.8493 14.9566C67.0432 15.0266 67.1817 15.1246 67.2648 15.2505C67.3202 15.3345 67.3618 15.4534 67.3895 15.6074C67.4172 15.7613 67.438 15.9362 67.4518 16.1322C67.4795 16.3141 67.4934 16.51 67.4934 16.7199C67.5072 16.9158 67.5141 17.0978 67.5141 17.2657ZM66.7246 13.0254C66.2953 13.1374 65.9352 13.0954 65.6443 12.8995C65.3673 12.6895 65.1942 12.3817 65.1249 11.9758C65.0695 11.6819 65.0903 11.4231 65.1872 11.1991C65.2842 10.9752 65.4296 10.8073 65.6235 10.6953C65.8174 10.5694 66.039 10.5134 66.2884 10.5274C66.5377 10.5414 66.787 10.6394 67.0363 10.8213C67.2717 10.9892 67.438 11.1851 67.5349 11.4091C67.6457 11.633 67.6803 11.8499 67.6388 12.0598C67.6111 12.2697 67.5211 12.4656 67.3687 12.6476C67.2163 12.8155 67.0017 12.9414 66.7246 13.0254Z'
        fill='#CF313E'
      />
      <path
        d='M78.2109 15.9642C78.3217 16.2301 78.3286 16.524 78.2317 16.8459C78.1486 17.1677 77.9893 17.3776 77.7538 17.4756C77.6292 17.5316 77.463 17.5806 77.2552 17.6226C77.0474 17.6505 76.8189 17.6785 76.5696 17.7065C76.3341 17.7345 76.0987 17.7555 75.8632 17.7695C75.6278 17.7835 75.4269 17.7905 75.2607 17.7905C75.2746 18.2103 75.2884 18.6441 75.3023 19.092C75.3161 19.5258 75.33 19.9526 75.3438 20.3724C75.3577 20.7923 75.3646 21.1981 75.3646 21.59C75.3646 21.9678 75.3577 22.3107 75.3438 22.6185C75.3438 22.8285 75.3438 23.0734 75.3438 23.3532C75.3438 23.6191 75.3231 23.878 75.2815 24.1299C75.2538 24.3818 75.2053 24.6057 75.1361 24.8017C75.0668 24.9836 74.9629 25.1025 74.8244 25.1585C74.3951 25.3404 74.0003 25.3894 73.6402 25.3055C73.294 25.2355 73.0446 25.0885 72.8923 24.8646C72.7815 24.6827 72.6984 24.4728 72.643 24.2349C72.5876 23.983 72.546 23.7311 72.5183 23.4792C72.5045 23.2133 72.4976 22.9614 72.4976 22.7235C72.5114 22.4716 72.5183 22.2547 72.5183 22.0728C72.5322 21.485 72.5391 20.8203 72.5391 20.0786C72.5529 19.3229 72.5599 18.5672 72.5599 17.8115H72.2482C72.082 17.8115 71.8673 17.8115 71.6042 17.8115C71.3549 17.7975 71.0987 17.7765 70.8355 17.7485C70.5862 17.7065 70.3507 17.6575 70.1291 17.6016C69.9075 17.5316 69.7482 17.4336 69.6513 17.3077C69.4989 17.1258 69.402 16.9298 69.3604 16.7199C69.3327 16.51 69.3466 16.3141 69.402 16.1322C69.4712 15.9362 69.5751 15.7683 69.7136 15.6284C69.8521 15.4744 70.0114 15.3765 70.1914 15.3345C70.4408 15.2645 70.7939 15.2295 71.251 15.2295C71.7081 15.2155 72.1374 15.2155 72.5391 15.2295C72.5253 15.0896 72.5183 14.9566 72.5183 14.8307C72.5183 14.6907 72.5114 14.5578 72.4976 14.4318C72.4837 14.2639 72.4768 14.054 72.4768 13.8021C72.4768 13.5362 72.4906 13.2773 72.5183 13.0254C72.5599 12.7595 72.6222 12.5146 72.7053 12.2907C72.7884 12.0528 72.9061 11.8709 73.0585 11.7449C73.2663 11.577 73.474 11.486 73.6818 11.472C73.9034 11.444 74.1042 11.472 74.2843 11.556C74.4782 11.64 74.6375 11.7659 74.7621 11.9338C74.9006 12.0878 74.9976 12.2627 75.053 12.4586C75.0945 12.6266 75.1292 12.8295 75.1568 13.0674C75.1845 13.2913 75.1984 13.5292 75.1984 13.7811C75.2122 14.033 75.2192 14.2849 75.2192 14.5368C75.2192 14.7887 75.2192 15.0196 75.2192 15.2295H75.4269C75.6347 15.2295 75.8771 15.2225 76.1541 15.2085C76.4311 15.1945 76.7012 15.2015 76.9643 15.2295C77.2413 15.2575 77.4907 15.3275 77.7123 15.4394C77.9339 15.5374 78.1001 15.7123 78.2109 15.9642Z'
        fill='#CF313E'
      />
      <path
        d='M86.3276 22.3456C86.4938 22.3037 86.66 22.2757 86.8262 22.2617C87.0062 22.2477 87.1655 22.2687 87.304 22.3247C87.4564 22.3806 87.581 22.4786 87.678 22.6185C87.7749 22.7445 87.8234 22.9264 87.8234 23.1643C87.8234 23.3322 87.7819 23.4932 87.6988 23.6471C87.6156 23.8011 87.5118 23.941 87.3871 24.067C87.2625 24.1929 87.124 24.3049 86.9716 24.4028C86.8192 24.4868 86.6738 24.5568 86.5353 24.6127C86.1336 24.7947 85.6697 24.9346 85.1433 25.0326C84.6309 25.1305 84.0976 25.1655 83.5436 25.1375C82.7957 25.1095 82.0754 24.9626 81.3829 24.6967C80.7042 24.4168 80.171 23.962 79.7832 23.3322C79.4231 22.7165 79.2084 22.0308 79.1391 21.2751C79.0699 20.5194 79.1045 19.8057 79.243 19.1339C79.3954 18.3223 79.6516 17.6645 80.0117 17.1607C80.3857 16.6429 80.8289 16.2301 81.3414 15.9222C81.9646 15.5584 82.6641 15.3695 83.4397 15.3555C84.2153 15.3415 84.9564 15.4954 85.6627 15.8173C86.1336 16.0272 86.5561 16.3141 86.93 16.6779C87.304 17.0278 87.588 17.4546 87.7819 17.9584C87.8373 18.0844 87.8788 18.2383 87.9065 18.4202C87.9481 18.6022 87.9758 18.7981 87.9896 19.008C88.0035 19.2039 88.0035 19.3998 87.9896 19.5958C87.9758 19.7917 87.9411 19.9666 87.8857 20.1205C87.8026 20.3724 87.6988 20.5684 87.5741 20.7083C87.4494 20.8482 87.2902 20.9532 87.0963 21.0232C86.9024 21.0932 86.6669 21.1421 86.3899 21.1701C86.1267 21.1841 85.8082 21.1981 85.4342 21.2121C85.1018 21.2261 84.7901 21.2331 84.4993 21.2331C84.2084 21.2331 83.9106 21.2331 83.6059 21.2331C83.3012 21.2191 82.9827 21.2121 82.6502 21.2121C82.3317 21.1981 81.9716 21.1841 81.5699 21.1701C81.5284 21.45 81.563 21.6949 81.6738 21.9048C81.7984 22.1007 81.9646 22.2687 82.1724 22.4086C82.3802 22.5346 82.6156 22.6325 82.8788 22.7025C83.1419 22.7725 83.3982 22.8145 83.6475 22.8285C84.1184 22.8564 84.5685 22.8215 84.9979 22.7235C85.4273 22.6115 85.8705 22.4856 86.3276 22.3456ZM85.4342 18.2733C85.171 17.9654 84.894 17.7415 84.6032 17.6016C84.3816 17.5036 84.1461 17.4616 83.8968 17.4756C83.6613 17.4756 83.4328 17.5106 83.2112 17.5806C82.8095 17.6785 82.4702 17.8884 82.1932 18.2103C82.1655 18.2383 82.117 18.3083 82.0477 18.4202C81.9785 18.5182 81.9092 18.6231 81.84 18.7351C81.7846 18.8471 81.743 18.952 81.7153 19.05C81.6876 19.1479 81.7015 19.1969 81.7569 19.1969H85.8289C85.8151 19.001 85.7805 18.8401 85.7251 18.7141C85.6697 18.5742 85.5727 18.4272 85.4342 18.2733Z'
        fill='#CF313E'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.0848 6.0118C21.4164 5.70895 21.4164 5.18293 21.0848 4.88008L15.9588 0.198415C15.4733 -0.24495 14.6976 0.103102 14.6976 0.764273V2.44269C13.5601 2.43713 12.4208 2.56563 11.3033 2.8291C8.74496 3.43222 6.39464 4.72036 4.49922 6.55819C2.60379 8.39602 1.23322 10.7157 0.531494 13.2736C-0.170235 15.8314 -0.17722 18.533 0.511271 21.0945C1.19976 23.656 2.55832 25.9829 4.44421 27.8307C6.33011 29.6785 8.67373 30.9791 11.2289 31.5957C13.784 32.2123 16.4564 32.1222 18.9652 31.335C20.5145 30.8488 21.9661 30.1078 23.2644 29.148C24.6008 28.1599 24.4897 26.213 23.2602 25.0921C22.0307 23.9712 20.1443 24.1314 18.6826 24.9178C18.2065 25.1739 17.7058 25.3854 17.1864 25.5484C15.7062 26.0128 14.1296 26.066 12.622 25.7022C11.1145 25.3384 9.73176 24.571 8.61909 23.4808C7.50641 22.3906 6.70486 21.0178 6.29865 19.5065C5.89244 17.9952 5.89656 16.4012 6.31058 14.8921C6.7246 13.383 7.53324 12.0144 8.65154 10.93C9.76984 9.84573 11.1565 9.08573 12.6659 8.72989C13.1955 8.60504 13.7333 8.53156 14.2722 8.50917C14.4139 8.50328 14.5559 8.49184 14.6976 8.47485V10.1276C14.6976 10.7888 15.4733 11.1368 15.9588 10.6935L21.0848 6.0118Z'
        fill='#CF313E'
      />
    </svg>
  )
}
