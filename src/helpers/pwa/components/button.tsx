import Button from '@/components/button'
import { OnClick } from '..'

export function PWAPromtButton({ onClick }: OnClick) {
  return (
    <Button btn='solid' onClick={onClick}>
      Install App
    </Button>
  )
}
