
import { api } from '../../services/api';

const Interceptors = ({ children }: any) => {

  api.interceptors.request.use(
    (config) => {
      return config
    }, error => {

      return Promise.reject(error.response)
    });

  return children;
};

export default Interceptors;
