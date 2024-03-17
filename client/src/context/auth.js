import { useState, useEffect, useContext, createContext } from "react";
<<<<<<< HEAD

const AuthContext = createContext();

=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
<<<<<<< HEAD
=======

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
<<<<<<< HEAD
  }, [auth]);
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
