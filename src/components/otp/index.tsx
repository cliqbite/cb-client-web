import {
  memo,
  useState,
  useCallback,
  type CSSProperties,
  type ChangeEvent,
  type KeyboardEvent,
  type ClipboardEvent,
  useId
} from 'react'
import SingleInput from './singleInput'

export interface OTPInputProps {
  length: number
  // eslint-disable-next-line no-unused-vars
  onChangeOTP: (otp: string) => any

  autoFocus?: boolean
  isNumberInput?: boolean
  disabled?: boolean

  style?: CSSProperties
  className?: string

  inputStyle?: CSSProperties
  inputClassName?: string
}

export function OTPInputComponent(props: OTPInputProps) {
  const {
    length,
    isNumberInput,
    autoFocus,
    disabled,
    onChangeOTP,
    inputClassName,
    inputStyle,
    ...rest
  } = props

  const otpId = useId()
  const [activeInput, setActiveInput] = useState(0)
  const [otpValues, setOTPValues] = useState(Array<string>(length).fill(''))

  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('')
      onChangeOTP(otpValue)
    },
    [onChangeOTP]
  )

  // Helper to return value with the right type: 'text' or 'number'
  const getRightValue = useCallback(
    (str: string) => {
      let changedValue = str
      if (!isNumberInput) {
        return changedValue
      }
      return !changedValue || /\d/.test(changedValue) ? changedValue : ''
    },
    [isNumberInput]
  )

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues]
      updatedOTPValues[activeInput] = str[0] || ''
      setOTPValues(updatedOTPValues)
      handleOtpChange(updatedOTPValues)
    },
    [activeInput, handleOtpChange, otpValues]
  )

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0)
      setActiveInput(selectedIndex)
    },
    [length]
  )

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1)
  }, [activeInput, focusInput])

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1)
  }, [activeInput, focusInput])

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index)
    },
    [focusInput]
  )

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value)
      if (!val) {
        e.preventDefault()
        return
      }
      changeCodeAtFocus(val)
      focusNextInput()
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  )

  // Hanlde onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1)
  }, [])

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault()
          if (otpValues[activeInput]) {
            changeCodeAtFocus('')
          } else {
            focusPrevInput()
          }
          break
        }
        case 'ArrowLeft': {
          e.preventDefault()
          focusPrevInput()
          break
        }
        case 'ArrowRight': {
          e.preventDefault()
          focusNextInput()
          break
        }
        case ' ': {
          e.preventDefault()
          break
        }
        default:
          break
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  )

  const handleOnPaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('')
      if (pastedData) {
        let nextFocusIndex = 0
        const updatedOTPValues = [...otpValues]
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val)
            if (changedValue) {
              updatedOTPValues[index] = changedValue
              nextFocusIndex = index
            }
          }
        })
        setOTPValues(updatedOTPValues)
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1))
      }
    },
    [activeInput, getRightValue, length, otpValues]
  )

  return (
    <div {...rest}>
      {Array(length)
        .fill('')
        .map((_, index) => (
          <SingleInput
            key={`${otpId}-${index}`}
            focus={activeInput === index}
            autoFocus={autoFocus}
            value={otpValues && otpValues[index]}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            style={inputStyle}
            className={inputClassName}
            disabled={disabled}
            inputMode='numeric'
            autoComplete='one-time-code'
            type='text'
          />
        ))}
    </div>
  )
}

const OTPInput = memo(OTPInputComponent)
export default OTPInput

/// refrence: https://codesandbox.io/s/react-otp-input-scratch-l6tfxv?file=/src/components/OTPInput/index.tsx:0-5202
