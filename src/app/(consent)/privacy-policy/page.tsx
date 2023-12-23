'use client'
import { toaster } from '@/components/toast'
// import { Toast } from "@/components/toast"
import Button from '@/components/ui/button'

const PrivacyPolicy = () => {
  return (
    <div>
      PrivacyPolicy
      <Button btn='base' onClick={() => toaster('lorem ipsum')}>
        Click
      </Button>
    </div>
  )
}

export default PrivacyPolicy
