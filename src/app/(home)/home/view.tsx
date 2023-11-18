import CardBasic from '@/components/card/basic'
import styles from './page.module.scss'
import CardSmall from '@/components/card/small'
import CardPromotion from '@/components/card/promotion'

const View = () => {
  return (
    <>
      <CardPromotion />
      <CardBasic name='title' price={3} />
      <CardSmall name='title' />
    </>
  )
}
export default View
