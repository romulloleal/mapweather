interface IUser {
  name: string;
  email: string;
  password?: string;
  permissions: string[];
}

export default IUser