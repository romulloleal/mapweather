interface ILoadingContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  pageState: string;
  setPageState: (pageState: string) => void;
}

export default ILoadingContext