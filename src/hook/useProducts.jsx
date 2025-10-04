import {useState} from "react";
import BaseClient from "../Helpers/BaseClient";
import {APIEndpoints} from "../constants/APIEndpoints";

const useProducts = () => {
  const [productData, setProductData] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const getProductList = async () => {
    try {
      setProductLoading(true);
      await BaseClient.get(APIEndpoints.getProductList, {
        onSuccess: (res) => {
          if (!Array.isArray(res.result) || res.result.length == 0) return;
          setProductData(res.result);
        },
        onFailed: (err) => console.log(err),
      });
    } finally {
      setProductLoading(false);
    }
  };
  return {getProductList, productData, productLoading};
};

export default useProducts;
