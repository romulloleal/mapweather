import { useLoading } from "../../providers/Loading";

import { Loader } from './style'

const Loading: React.FC = () => {
  // const override = css`
  //   display: block;
  //   margin: 0 auto;
  // `;
  const { loading } = useLoading()
  return (
    <>
      {loading &&
        <Loader>
          {/* <BarLoader color="blue" loading={loading} css={override} width={"100%"} /> */}
        </Loader>
      }
    </>
  )
}

export default Loading