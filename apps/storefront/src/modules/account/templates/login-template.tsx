import { useAccount } from "@lib/context/account-context"
import Register from "@modules/account/components/register"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Login from "../components/login"

const LoginTemplate = () => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])

  return (
    <div className="w-full flex justify-center py-24">
      {currentView === "sign-in" ? <Login /> : <Register />}
    </div>
  )
}

export default LoginTemplate
