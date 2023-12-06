import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//Removed : wrong module(jwt-decode) imported & no requirement of it here
// import jwt-decode from "jwt-decode";

const AccountArea = () => {
  // const [user, setUser] = useState(null);  Removed because user state not utilized.

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  //fetch products logic (seperation of concern)
  const fetchProducts = useCallback(async () => {
    //Fixed : handle all errors gracefully including Network errors.
    try {
      const token = localStorage.getItem("productly");
      const response = await fetch("https://api.productly.app/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // network error in the 4xx–5xx range
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      const errorMessage =
        error?.response?.data ?? error.message ?? "Something Went Wrong";
      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    //fetch products
    fetchProducts();

    //clean up previous states on unmount.
    return () => {
      setProducts([]);
      setError("");
    };
  }, [fetchProducts]);

  useEffect(() => {
    const token = localStorage.getItem("productly");
    if (!token) {
      navigate("/login");
    }

    //removed: user state not used anywhere in the file
    // else {
    //   const decodedUser = jwt_decode(token);
    //   setUser(decodedUser);
    // }
  }, [navigate]);

  //Wrapped progressbar width calculation in usememo for memoization
  const progressBarWidth = useMemo(() => {
    const maxProducts = 50; // Hardcoded value
    return (products.length / maxProducts) * 100;
  }, [products.length]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div>
        {/* Fixed: checked for invalid type before map */}
        {Array.isArray(products) ? (
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              {/* Added product description. [it will shown if exist] */}
              {product?.description && <p>product?.description</p>}
            </div>
          ))
        ) : (
          <p className="fs-5 ">Something Went Wrong !</p>
        )}
      </div>
      <div style={{ width: progressBarWidth }}>Progress Bar</div>
    </div>
  );
};

export default AccountArea;
