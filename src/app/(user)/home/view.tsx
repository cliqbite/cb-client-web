'use client'
import { getFoodCategory, getFoodList } from '@/client/functions/getFoodList'
import useAuth from '@/client/hooks/useAuth'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import CardBasic from '@/components/card/basic'
import CardDetail from '@/components/card/detail'
import CardPromotion from '@/components/card/promotion'
import CardSmall from '@/components/card/small'
import Loader from '@/components/ui/loader'
import Rail from '@/components/ui/rail'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

const View = () => {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  const [foodlist, category] = useQueries({
    queries: [
      {
        queryKey: ['food-list'],
        queryFn: () => getFoodList('VVCE_CNTN01')
      },
      {
        queryKey: ['food-category'],
        queryFn: () => getFoodCategory('VVCE_CNTN01')
      }
    ]
  })

  if (isLoading) {
    return (
      <Loader>
        <Loader.Dot />
      </Loader>
    )
  }

  if (!user) router.push(ROUTE.LOGIN)
  return (
    <main className={cls('contain', styles.page)}>
      <CardPromotion />
      <Rail heading='Category'>
        {(category.data || []).map((item, key) => {
          return (
            <Rail.Item key={key}>
              <CardSmall name={item} src='' />
            </Rail.Item>
          )
        })}
      </Rail>
      {(foodlist.data || [])
        .filter((item) => item.available)
        .map((item) => (
          <CardDetail key={item.id} name={item?.name} price={item?.price} />
        ))}
      <Rail heading='All'>
        {(foodlist.data || [])
          .filter((item) => item.available)
          .filter((item) => !item.category.includes('snacks'))
          .filter((item) => !item.category.includes('chats'))
          .map((item, key) => (
            <Rail.Item key={key + item?.id}>
              <CardBasic name={item?.name} price={item?.price} />
            </Rail.Item>
          ))}
      </Rail>
      <Rail heading='Chats'>
        {(foodlist.data || [])
          .filter((item) => item.category.includes('chats'))
          .map((item, key) => (
            <Rail.Item key={key + item.id}>
              <CardBasic name={item?.name} price={item?.price} />
            </Rail.Item>
          ))}
      </Rail>
      <Rail heading='Snacks'>
        {(foodlist.data || [])
          .filter((item) => item.category.includes('snacks'))
          .map((item, key) => (
            <Rail.Item key={key + item.id}>
              <CardBasic name={item?.name} price={item?.price} />
            </Rail.Item>
          ))}
      </Rail>
    </main>
  )
}
export default View
