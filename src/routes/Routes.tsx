import IRoute from "../interfaces/IRoute";
import { Index as Home } from "../modules";
import CreateAcc from "../modules/CreateAccount";

const RoutesPaths: IRoute[] = [
  {
    path: '/',
		element: <Home />,
		authenticated: false
  },

  {
    path: '/create_account',
		element: <CreateAcc />,
		authenticated: false
  },
]

export default RoutesPaths