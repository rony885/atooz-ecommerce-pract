import { createContext, useContext, useReducer, useCallback } from "react";
import ApiReducer from "../reducer/ApiReducer";

const AppContext = createContext();

const initialState = {
  // loading & error
  isLoading: false,
  isError: false,

  // Address Module
  district: [],
  upazila: [],

  // Product module
  category: [],
  unpaginate_category: [],

  brand: [],
  unpaginate_brand: [],

  unit: [],
  unpaginate_unit: [],

  product: [],
  unpaginate_product: [],
};

const ApiContext = ({ children }) => {
  const [state, dispatch] = useReducer(ApiReducer, initialState);

  // all urls
  const urls = {
    // Address Module
    district: `${process.env.REACT_APP_BASE_URL}/address_api/districts/`,
    upazila: `${process.env.REACT_APP_BASE_URL}/address_api/upazilas/`,

    // Product module
    category: `${process.env.REACT_APP_BASE_URL}/product_api/category/`,
    unpaginateCategory: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_category/`,

    brand: `${process.env.REACT_APP_BASE_URL}/product_api/brand/`,
    unpaginateBrand: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_brand/`,

    unit: `${process.env.REACT_APP_BASE_URL}/product_api/unit/`,
    unpaginateUnit: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_unit/`,

    product: `${process.env.REACT_APP_BASE_URL}/product_api/product/`,
    unpaginateProduct: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_product/`,
  };

  // Fetch data function with useCallback
  const fetchData = useCallback(async (url, actionType) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();
      dispatch({ type: actionType, payload: result });
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      dispatch({ type: "API_ERROR" });
    }
  }, []);

  // Memoize all fetch functions using useCallback
  // Address module
  const fetchDistrict = useCallback(
    () => fetchData(urls.district, "SET_API_DISTRICT"),
    [fetchData, urls.district]
  );

  const fetchUpazila = useCallback(
    () => fetchData(urls.upazila, "SET_API_UNPAGINATE_UPAZILA"),
    [fetchData, urls.upazila]
  );

  // Product module
  const fetchCategory = useCallback(
    () => fetchData(urls.category, "SET_API_CATEGORY"),
    [fetchData, urls.category]
  );

  const fetchUnpaginateCategory = useCallback(
    () => fetchData(urls.unpaginateCategory, "SET_API_UNPAGINATE_CATEGORY"),
    [fetchData, urls.unpaginateCategory]
  );

  const fetchBrand = useCallback(
    () => fetchData(urls.brand, "SET_API_BRAND"),
    [fetchData, urls.brand]
  );

  const fetchUnpaginateBrand = useCallback(
    () => fetchData(urls.unpaginateBrand, "SET_API_UNPAGINATE_BRAND"),
    [fetchData, urls.unpaginateBrand]
  );

  const fetchUnit = useCallback(
    () => fetchData(urls.unit, "SET_API_UNIT"),
    [fetchData, urls.unit]
  );

  const fetchUnpaginateUnit = useCallback(
    () => fetchData(urls.unpaginateUnit, "SET_API_UNPAGINATE_UNIT"),
    [fetchData, urls.unpaginateUnit]
  );

  const fetchProduct = useCallback(
    () => fetchData(urls.product, "SET_API_PRODUCT"),
    [fetchData, urls.product]
  );

  const fetchUnpaginateProduct = useCallback(
    () => fetchData(urls.unpaginateProduct, "SET_API_UNPAGINATE_PRODUCT"),
    [fetchData, urls.unpaginateProduct]
  );

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchDistrict,
        fetchUpazila,

        fetchCategory,
        fetchUnpaginateCategory,
        fetchBrand,
        fetchUnpaginateBrand,
        fetchUnit,
        fetchUnpaginateUnit,
        fetchProduct,
        fetchUnpaginateProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApiContext = () => useContext(AppContext);

export { ApiContext, AppContext, useApiContext };
