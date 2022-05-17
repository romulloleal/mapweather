import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { IAuthContext, IUser } from '../../interfaces';
import { translate } from '../../utils/Translate';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<IUser | undefined>(() => {
    const user = localStorage.getItem('@1nfluencersTest:user')

    if (user) {
      return JSON.parse(user)
    }

    return undefined
  })

  const signIn = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("@1nfluencersTest:users") || '[]')

    const user = users.find((user: IUser) => user.email === email && user.password === password)

    if (user) {
      delete user.password
      localStorage.setItem('@1nfluencersTest:user', JSON.stringify(user))
      setUser(user)
    } else {
      toast.error(translate.wrongEmailOrPassword)
    }
  }

  const signOut = async () => {

    localStorage.removeItem('@1nfluencersTest:user')

    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;