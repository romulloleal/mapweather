import { createContext, useContext, useState } from 'react';

import Interceptors from '../Interceptors';

import { ILoadingContext } from '../../interfaces';

const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [pageState, setState] = useState<string>('loading')

  const setPageState = (pageState: string) => {
    setState(pageState);
    pageState === 'loading'
      ? setLoading(true)
      : setLoading(false)
  }

  return (
    <LoadingContext.Provider value={{ loading, setLoading, pageState, setPageState }}>
      <Interceptors>
        {children}
      </Interceptors>
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}

export default LoadingProvider;