interface IRoute {
  path: string,
  element: JSX.Element,
  authenticated: boolean
  permission?: string[];
}

export default IRoute