import { useState, useEffect, useContext, createContext } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const AuthContext = createContext();

=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/04-admin-user-panel-vid-15
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/06-category-API-vid-16
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/04-admin-user-panel-vid-15
=======
>>>>>>> origin/06-category-API-vid-16

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
>>>>>>> origin/04-admin-user-panel-vid-15
=======
>>>>>>> origin/06-category-API-vid-16
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
<<<<<<< HEAD
<<<<<<< HEAD
  }, [auth]);
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/04-admin-user-panel-vid-15
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/06-category-API-vid-16
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
