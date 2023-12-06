import React, { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import ProductModal from "../../components/ProductModal";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productSelected, setProductSelected] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    //handle all errors gracefully [network error, response error]
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      // network error in the 4xx–5xx range
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      const errorMessage =
        error?.response?.data ?? error.message ?? "Something Went Wrong !";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModal = (product = null) => {
    setProductSelected(product ? product : {});
    setIsOpenModal(product ? true : false);
  };

  useEffect(() => {
    //fetch products
    fetchProducts();

    //clean up states
    return () => {
      setError("");
      setProducts([]);
    };
  }, []);

  return (
    <div className="container h-100 p-2">
      <div className="text-center p-3 mb-2 bg-white text-dark fs-2 fw-semibold text-uppercase">
        Products
      </div>

      {/* Show Any Error occurs during API calling  */}
      {error && (
        <p className="fs-5 text-danger text-center">{`Error : ${error}`}</p>
      )}

      <div className="row">
        {!isLoading ? (
          Array.isArray(products) ? (
            products.length > 0 ? (
              products.map((p) => (
                <div className="col-12 col-sm-6 col-md-4 g-4" key={p.id}>
                  <ProductCard product={p} handleModal={handleModal} />
                </div>
              ))
            ) : !error ? (
              <p className="text-body-secondary fs-5 text-center">
                No Products Found!
              </p>
            ) : (
              <></>
            )
          ) : (
            <p className="text-danger fs-5 text-center ">
              Something went Wrong!
            </p>
          )
        ) : (
          <Loader />
        )}
      </div>
      <ProductModal
        isOpen={isOpenModal}
        handleModal={handleModal}
        product={productSelected}
      />
    </div>
  );
};

export default ProductList;
