import { toast } from "react-toastify"
import { IUser } from "../../../interfaces"
import { translate } from "../../../utils/Translate"

export const createAccount = async (email: string, name: string, password: string) => {
  const users = JSON.parse(localStorage.getItem("@1nfluencersTest:users") || '[]')

  const checkUserExists = findUser(users, email)

  if (checkUserExists) {
    toast.error(translate.emailInUse)
    throw new Error()
  }

  const user = {
    email,
    name,
    password,
    permissions: []
  }

  users.push(user)

  localStorage.setItem("@1nfluencersTest:users", JSON.stringify(users))

  toast.success(translate.accCreatedSuccess)
}

const findUser = (users: IUser[], email: string) => {
  const result = users.find((user: IUser) => user.email === email)

  return result
}