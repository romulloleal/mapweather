import { ThemeProvider } from "styled-components";
import { ToastContainer } from 'react-toastify';

import AuthProvider from "./Auth";
import Loading from '../components/Loading'
import LoadingProvider from './Loading'
import { defaultTheme } from "./Theme/theme";
import GlobalTheme from "./Theme/global";

import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      <AuthProvider>
        <LoadingProvider>
          <Loading />
          {children}
        </LoadingProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default Providers
