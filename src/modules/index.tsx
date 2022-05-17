import { useAuth } from "../providers/Auth"

import Home from "./Home"
import Login from "./Login"

export const Index = () => {
  const { user } = useAuth()
  
  return (
    <>
      {!user ? <Login /> : <Home />}
    </>
  )
}