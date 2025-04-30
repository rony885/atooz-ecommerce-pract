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
