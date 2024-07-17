import ReactLoading from "react-loading";
import { LOADER_COLOR } from "./constants";

const Loader = () => {
  return (
    <ReactLoading type="spin" color={LOADER_COLOR} height={100} width={50} />
  );
};

export default Loader;
