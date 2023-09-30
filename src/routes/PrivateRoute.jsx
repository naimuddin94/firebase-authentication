import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuthInfo from "../hooks/useAuthInfo";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthInfo();

    if (loading) { 
        return (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        );
    }
    
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
