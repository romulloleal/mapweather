import IUser from './IUser'

interface IAuthContext {
  user: IUser | undefined;
  signIn: (login: string, password: string) => void;
  signOut: () => void;
}

export default IAuthContext