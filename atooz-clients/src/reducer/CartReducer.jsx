
const CartReducer = ({ state, action }) => {
  //   wishlist
  if (action.type === "ADD_TO_WISHLIST") {
    let { id, product } = action.payload;

    // Check if the product is already in the wishlist
    let existingProduct = state.wishlist.find((curItem) => curItem.id === id);

    if (existingProduct) {
      // If the product already exists, return the current state (no duplicates)
      return {
        ...state,
        wishlist: state.wishlist, // No changes
      };
    } else {
      // If the product doesn't exist in the wishlist, add it
      let wishlistProduct = {
        id: id,
        name: product.name,
        image: product.mainImage,
        price: Number(product.specialPrice),
        discount: Number(product.discount),
      };

      return {
        ...state,
        wishlist: [...state.wishlist, wishlistProduct], // Add new item to the wishlist
      };
    }
  }

  if (action.type === "REMOVE_WISHLIST_ITEM") {
    let updatedWishlist = state.wishlist.filter(
      (curElem) => curElem.id !== action.payload
    );

    return {
      ...state,
      wishlist: updatedWishlist,
    };
  }

  if (action.type === "CLEAR_WISHLIST") {
    return {
      ...state,
      wishlist: [],
    };
  }

  return state;
}

export default CartReducer
