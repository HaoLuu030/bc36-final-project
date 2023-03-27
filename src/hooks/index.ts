import { useLocation } from "react-router-dom";

const useConfirmSignUp = () => {
  const location = useLocation();
  if (location.pathname === "/sign-up") {
    return true;
  }
  return false;
};

export { useConfirmSignUp };
