import Button from '@/components/ui/button'
import { OnClick } from '..'

export function PWAPromtButton({ onClick }: OnClick) {
  return (
    <Button btn='solid' onClick={onClick}>
      Install App
    </Button>
  )
}
