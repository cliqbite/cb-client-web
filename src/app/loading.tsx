import Loader from '@/components/ui/loader'

export default function Loading() {
  return (
    <main>
      <Loader className='loader-full'>
        <Loader.Default />
      </Loader>
    </main>
  )
}
