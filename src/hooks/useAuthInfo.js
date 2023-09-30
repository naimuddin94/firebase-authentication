import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuthInfo = () => {
  return useContext(AuthContext);
};

export default useAuthInfo;
