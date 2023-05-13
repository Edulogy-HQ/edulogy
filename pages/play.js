import Dashboard from "@/components/dashboard"
import Login from "@/components/login"
import { useSession } from "next-auth/react"

export default function Play() {
  const {data: session, status} = useSession({required: true});

  if (status==="authenticated") {
    return <Dashboard />
  }

  // return <Dashboard />
}