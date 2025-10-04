import {useState} from "react";
import BaseClient from "../Helpers/BaseClient";
import {APIEndpoints} from "../Constants/APIEndpoints";
const useProducts = () => {
  const [productData, setProductData] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const getProductList = async () => {
    try {
      setProductLoading(true);
      await BaseClient.get(APIEndpoints.getProductList, {
        onSuccess: (res) => {
          console.log(res, "result from call");
          if (!Array.isArray(res.result) || res.result.length == 0) return;
          console.log(res, "result from call");
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
