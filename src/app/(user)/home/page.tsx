import { LocationValidator } from '@/client/container/guards'
import Header from '@/components/header'
import View from './view'

export default function Home() {
  return (
    <LocationValidator>
      <Header />
      <View></View>
    </LocationValidator>
  )
}
