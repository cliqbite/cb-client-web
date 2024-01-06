'use client'
import { getFoodList } from '@/client/functions/getFoodList'
import useAuth from '@/client/hooks/useAuth'
import { ROUTE } from '@/common/constants/route'
import { cls } from '@/common/utils/classnames'
import CardBasic from '@/components/card/basic'
import CardDetail from '@/components/card/detail'
import CardPromotion from '@/components/card/promotion'
import Loader from '@/components/ui/loader'
import Rail from '@/components/ui/rail'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

const View = () => {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const {
    data,
    isLoading: dataLoading,
    isSuccess
  } = useQuery({
    queryKey: ['food-list'],
    queryFn: () => getFoodList('VVCE_CNTN01')
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
      {(data || [])
        .filter((item) => item.available)
        .map((item) => (
          <CardDetail key={item.id} name={item?.name} price={item?.price} />
        ))}
      <Rail heading='All'>
        {(data || [])
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
        {(data || [])
          .filter((item) => item.category.includes('chats'))
          .map((item, key) => (
            <Rail.Item key={key + item.id}>
              <CardBasic name={item?.name} price={item?.price} />
            </Rail.Item>
          ))}
      </Rail>
      <Rail heading='Snacks'>
        {(data || [])
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
