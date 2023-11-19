import { type FC } from 'react'
import View from './view'
import Header from '@/components/header'

const Home: FC = () => {
  return (
    <main>
      <Header />

      <h1>Home</h1>

      <View></View>
    </main>
  )
}
export default Home
