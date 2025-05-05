const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    // Address module
    case "SET_API_DISTRICT":
      return {
        ...state,
        isLoading: false,
        district: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_UPAZILA":
      return {
        ...state,
        isLoading: false,
        upazila: action.payload,
        isError: false,
      };

    // Product module
    case "SET_API_CATEGORY":
      return {
        ...state,
        isLoading: false,
        category: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_CATEGORY":
      return {
        ...state,
        isLoading: false,
        unpaginate_category: action.payload,
        isError: false,
      };

    case "SET_API_BRAND":
      return {
        ...state,
        isLoading: false,
        brand: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_BRAND":
      return {
        ...state,
        isLoading: false,
        unpaginate_brand: action.payload,
        isError: false,
      };

    case "SET_API_UNIT":
      return {
        ...state,
        isLoading: false,
        unit: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_UNIT":
      return {
        ...state,
        isLoading: false,
        unpaginate_unit: action.payload,
        isError: false,
      };

    case "SET_API_PRODUCT":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        unpaginate_product: action.payload,
        isError: false,
      };

    //Settings Module
    case "SET_API_SUPPLIER":
      return {
        ...state,
        isLoading: false,
        supplier: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_SUPPLIER":
      return {
        ...state,
        isLoading: false,
        unpaginate_supplier: action.payload,
        isError: false,
      };

    case "SET_API_COURIER":
      return {
        ...state,
        isLoading: false,
        courier: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_COURIER":
      return {
        ...state,
        isLoading: false,
        unpaginate_courier: action.payload,
        isError: false,
      };

    case "SET_API_DELIVERYTYPE":
      return {
        ...state,
        isLoading: false,
        deliveryType: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_DELIVERYTYPE":
      return {
        ...state,
        isLoading: false,
        unpaginate_deliveryType: action.payload,
        isError: false,
      };

    case "SET_API_CLIENT":
      return {
        ...state,
        isLoading: false,
        client: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_CLIENT":
      return {
        ...state,
        isLoading: false,
        unpaginate_client: action.payload,
        isError: false,
      };

    case "SET_API_GENERAL_SETTINGS":
      return {
        ...state,
        isLoading: false,
        general_settings: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_GENERAL_SETTINGS":
      return {
        ...state,
        isLoading: false,
        unpaginate_general_settings: action.payload,
        isError: false,
      };

    //Blog Module
    case "SET_API_BLOG":
      return {
        ...state,
        isLoading: false,
        blog: action.payload,
        isError: false,
      };

    case "SET_API_UNPAGINATE_BLOG":
      return {
        ...state,
        isLoading: false,
        unpaginate_blog: action.payload,
        isError: false,
      };

    // order & purchase module
    case "SET_API_PURCHASE":
      return {
        ...state,
        isLoading: false,
        purchase: action.payload,
        isError: false,
      };

    case "SET_API_ORDER":
      return {
        ...state,
        isLoading: false,
        order: action.payload,
        isError: false,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
