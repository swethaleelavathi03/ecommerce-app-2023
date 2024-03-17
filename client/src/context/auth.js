import { useState, useEffect, useContext, createContext } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/07-products-api-crud-vid-17
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/09-Create-Products-Vid-19
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/14-payment-gateway-integration
=======
import axios from "axios";

const AuthContext = createContext();
>>>>>>> origin/15-admin-orders-css
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/04-admin-user-panel-vid-15
=======
>>>>>>> origin/06-category-API-vid-16
=======
>>>>>>> origin/07-products-api-crud-vid-17
=======
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
>>>>>>> origin/09-Create-Products-Vid-19
=======
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
>>>>>>> origin/14-payment-gateway-integration
=======
>>>>>>> origin/15-admin-orders-css

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/03-PrivateRoutes-ForgotPassword-vid-13-14
=======
>>>>>>> origin/04-admin-user-panel-vid-15
=======
>>>>>>> origin/06-category-API-vid-16
=======
>>>>>>> origin/07-products-api-crud-vid-17
=======
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
>>>>>>> origin/09-Create-Products-Vid-19
=======
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
>>>>>>> origin/14-payment-gateway-integration
=======
>>>>>>> origin/15-admin-orders-css
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/07-products-api-crud-vid-17
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/08-React-Category-CRUD-vid-18
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/09-Create-Products-Vid-19
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/10-Update-Delete-Product-vid-20
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/11-filter-cat-price-paginate-vid-21
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/12-search-cat-similar-filter-vid-22-23
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/13-cart-and-UserProfile-vid-24-25
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/14-payment-gateway-integration
=======
    //eslint-disable-next-line
  }, []);
>>>>>>> origin/15-admin-orders-css
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
