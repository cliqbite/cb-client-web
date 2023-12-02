import { ROUTE } from "@/common/constants/route"
import Link from "next/link"

function Success() {
  return (
    <div>Success
      <Link href={ROUTE.HOME}>Redirect to Home</Link>    </div>
  )
}

export default Success