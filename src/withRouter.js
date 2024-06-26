import { useNavigate } from "react-router";

/**
 * This function is for allowing navigation inside a class component
 */
export const withRouter = (Component) => {
    const Wrapper = (props) => {
      const navigate = useNavigate();
      
      return (
        <Component
          navigate={navigate}
          {...props}
          />
      );
    };
    
    return Wrapper;
  };