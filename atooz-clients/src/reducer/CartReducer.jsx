
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


    //   cart
  if (action.type === "ADD_TO_CART") {
    let { id, amount, size, color, product } = action.payload;

    // Create a unique identifier by combining id, color, and size
    let uniqueId = id + color + size;

    // Find if the product with the same unique id (id + color + size) already exists in the cart
    let existingProduct = state.cart.find((curItem) => curItem.id === uniqueId);

    if (existingProduct) {
      // If the product exists, update its amount
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === uniqueId) {
          let newAmount = curElem.amount + amount;

          // Ensure the new amount does not exceed the available stock
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      // Add a new item to the cart with a unique id (id + color + size)
      let cartProduct = {
        id: uniqueId, // Use the combined id (id + color + size)
        name: product.name,
        amount: amount,
        image: product.mainImage,
        price: Number(product.regularPrice),
        sPrice: Number(product.specialPrice),
        max: Number(product.initial_stock),
        discount: Number(product.discount),
        size: size, // Include size in the cart item
        color: color, // Include color in the cart item
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let updatedItemPrice = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_price: updatedItemPrice,
    };
  }

  if (action.type === "CART_DISCOUNT") {
    let updatedDiscount = state.cart.reduce((initialVal, curElem) => {
      let { discount, amount } = curElem;
      initialVal = initialVal + discount * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_discount: updatedDiscount,
    };
  }

  if (action.type === "CART_TOTAL_SPECIAL_PRICE") {
    let updatedItemPrice = state.cart.reduce((initialVal, curElem) => {
      let { sPrice, amount } = curElem;
      initialVal = initialVal + sPrice * amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_special_price: updatedItemPrice,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
}

export default CartReducer
