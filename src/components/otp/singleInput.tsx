import { usePrevious } from '@/client/hooks'
import Input, { OutlineInputProps } from '@/components/ui/input/outline'
import { memo, useLayoutEffect, useRef } from 'react'

export interface SingleOTPInputProps extends OutlineInputProps {
  focus?: boolean
}

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const { focus, autoFocus, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const prevFocus = usePrevious(!!focus)

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus()
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [autoFocus, focus, prevFocus])

  return <Input ref={inputRef} {...rest} />
}

const SingleOTPInput = memo(SingleOTPInputComponent)
export default SingleOTPInput
