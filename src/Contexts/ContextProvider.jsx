import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Axios } from "../Api/Axios";
import { USER } from "../Api/Api";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [update, setUpdate] = useState([]);

  const [currentUser, setCurrentUser] = useState({});
  const products = JSON.parse(localStorage.getItem("cartProducts")) || [];

  const cartProductsTotal = products.reduce(
    (acc, product) => acc + Number(product.price),
    0,
  );

  useEffect(() => {
    setLoading(true);
    const fetchCurrentUser = async () => {
      try {
        const response = await Axios.get(`/${USER}`);
        setCurrentUser(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        currentUser,
        isCartOpen,
        setIsCartOpen,
        cartProductsTotal,
        setUpdate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
