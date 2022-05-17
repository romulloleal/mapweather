import { Route, Routes as Router, BrowserRouter } from "react-router-dom"

import NotFound from "../modules/NotFound";
import NotAuthorized from "../modules/NotAuthorized";
import RoutesData from "./Routes";
import { IRoute } from "../interfaces";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        {/* MAIN ROUTES */}
        {RoutesData.map((route: IRoute) =>
          <Route path={route.path} element={route.element} key={route.path} />
        )}

        {/* OTHER ROUTES */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />

        <Route path="*" element={<NotFound />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes