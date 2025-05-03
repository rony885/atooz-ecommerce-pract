import { createContext, useContext, useReducer, useCallback } from "react";
import ApiReducer from "../reducer/ProductReducer";

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

  // Settings Module
  supplier: [],
  unpaginate_supplier: [],

  courier: [],
  unpaginate_courier: [],

  deliveryType: [],
  unpaginate_deliveryType: [],

  client: [],
  unpaginate_client: [],

  general_settings: {},
  unpaginate_general_settings: {},
};

const AppProvider = ({ children }) => {
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

    // Settings module
    supplier: `${process.env.REACT_APP_BASE_URL}/settings_api/supplier/`,
    unpaginateSupplier: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_supplier/`,

    courier: `${process.env.REACT_APP_BASE_URL}/settings_api/courier/`,
    unpaginateCourier: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_courier/`,

    deliveryType: `${process.env.REACT_APP_BASE_URL}/settings_api/deliveryType/`,
    unpaginateDeliveryType: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_deliveryType/`,

    client: `${process.env.REACT_APP_BASE_URL}/settings_api/client/`,
    unpaginateClient: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_client/`,

    generalSettings: `${process.env.REACT_APP_BASE_URL}/settings_api/generalSettings/1/`,
    unpaginateGeneralSettings: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_generalSettings/1/`,
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

  // Settings Module
  const fetchSupplier = useCallback(
    () => fetchData(urls.supplier, "SET_API_SUPPLIER"),
    [fetchData, urls.supplier]
  );

  const fetchUnpaginateSupplier = useCallback(
    () => fetchData(urls.unpaginateSupplier, "SET_API_UNPAGINATE_SUPPLIER"),
    [fetchData, urls.unpaginateSupplier]
  );

  const fetchCourier = useCallback(
    () => fetchData(urls.courier, "SET_API_COURIER"),
    [fetchData, urls.courier]
  );

  const fetchUnpaginateCourier = useCallback(
    () => fetchData(urls.unpaginateCourier, "SET_API_UNPAGINATE_COURIER"),
    [fetchData, urls.unpaginateCourier]
  );

  const fetchDeliveryType = useCallback(
    () => fetchData(urls.deliveryType, "SET_API_DELIVERYTYPE"),
    [fetchData, urls.deliveryType]
  );

  const fetchUnpaginateDeliveryType = useCallback(
    () =>
      fetchData(urls.unpaginateDeliveryType, "SET_API_UNPAGINATE_DELIVERYTYPE"),
    [fetchData, urls.unpaginateDeliveryType]
  );

  const fetchClient = useCallback(
    () => fetchData(urls.client, "SET_API_CLIENT"),
    [fetchData, urls.client]
  );

  const fetchUnpaginateClient = useCallback(
    () => fetchData(urls.unpaginateClient, "SET_API_UNPAGINATE_CLIENT"),
    [fetchData, urls.unpaginateClient]
  );

  const fetchGeneralSettings = useCallback(
    () => fetchData(urls.generalSettings, "SET_API_GENERAL_SETTINGS"),
    [fetchData, urls.generalSettings]
  );

  const fetchUnpaginateGeneralSettings = useCallback(
    () =>
      fetchData(
        urls.unpaginateGeneralSettings,
        "SET_API_UNPAGINATE_GENERAL_SETTINGS"
      ),
    [fetchData, urls.unpaginateGeneralSettings]
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

        fetchSupplier,
        fetchUnpaginateSupplier,
        fetchCourier,
        fetchUnpaginateCourier,
        fetchDeliveryType,
        fetchUnpaginateDeliveryType,
        fetchClient,
        fetchUnpaginateClient,
        fetchGeneralSettings,
        fetchUnpaginateGeneralSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => useContext(AppContext);

export { AppProvider, AppContext, useProductContext };
