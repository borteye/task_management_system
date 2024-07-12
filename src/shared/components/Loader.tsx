import ReactLoading from "react-loading";

type Props = {};

const Loader = (props: Props) => {
  return <ReactLoading type="spin" color="#6C63FF" height={100} width={50} />;
};

export default Loader;
