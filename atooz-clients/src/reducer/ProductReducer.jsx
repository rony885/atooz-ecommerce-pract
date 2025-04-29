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
