import React from "react";

const PurchaseProductForm = ({
  productList,
  setProductList,
  unpaginate_product,
}) => {
  const handleAddProduct = () => {
    const newProduct = {
      productId: null,
      bdtRate: 0,
      quantity: 1,
      linePrice: 0,
    };
    setProductList([...productList, newProduct]);
  };

  const handleDeleteProduct = (index) => {
    if (index === 0 || productList.length === 1) {
      return;
    }

    const updatedProductList = productList.filter(
      (product, idx) => idx !== index
    );

    setProductList(updatedProductList);
  };

  const handleProductChange = (index, selectedProductId) => {
    const selectedProduct = unpaginate_product.find(
      (product) => product.id === parseInt(selectedProductId)
    );

    if (selectedProduct) {
      const updatedProductList = productList.map((product, idx) => {
        if (idx === index) {
          const updatedProduct = {
            ...product,
            productId: selectedProduct.id,
            bdtRate: parseFloat(selectedProduct.purchase_price),
          };
          updatedProduct.linePrice =
            updatedProduct.quantity * updatedProduct.bdtRate;
          return updatedProduct;
        }
        return product;
      });
      setProductList(updatedProductList);
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (!isNaN(newQuantity)) {
      const updatedProductList = productList.map((product, idx) => {
        if (idx === index) {
          return {
            ...product,
            quantity: newQuantity,
            linePrice: newQuantity * product.bdtRate,
          };
        }
        return product;
      });

      setProductList(updatedProductList);
    }
  };

  const handleRateChange = (index, newRate) => {
    if (!isNaN(newRate)) {
      const updatedProductList = productList.map((product, idx) => {
        if (idx === index) {
          return {
            ...product,
            bdtRate: newRate,
            linePrice: product.quantity * newRate,
          };
        }
        return product;
      });

      setProductList(updatedProductList);
    }
  };

  return (
    <div className="table-responsive my-5">
      <table className="invoice-table table table-borderless table-nowrap mb-0">
        <thead className="align-middle">
          <tr className="table-light w-100">
            <th scope="col" style={{ width: "5%", whiteSpace: "nowrap" }}>
              #
            </th>
            <th scope="col" style={{ width: "30%", whiteSpace: "nowrap" }}>
              Product Name
            </th>
            <th scope="col" style={{ width: "25%", whiteSpace: "nowrap" }}>
              Product Quantity
            </th>
            <th scope="col" style={{ width: "20%", whiteSpace: "nowrap" }}>
              Rate (BDT)
            </th>
            <th scope="col" style={{ width: "10%", whiteSpace: "nowrap" }}>
              Total Amount
            </th>
            <th scope="col" style={{ width: "10%", whiteSpace: "nowrap" }}>
              Delete
            </th>
          </tr>
        </thead>

        <tbody id="newlink w-100">
          {productList.map((product, index) => (
            <tr key={index + 1}>
              <th scope="row" className="product-id">
                {index + 1}
              </th>

              <td className="text-start">
                <div className="mb-2">
                  <select
                    className="form-select"
                    value={product.productId || ""}
                    onChange={(e) => handleProductChange(index, e.target.value)}
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    {unpaginate_product &&
                      unpaginate_product.map((productOption) => (
                        <option key={productOption.id} value={productOption.id}>
                          {productOption.name}&nbsp;-&nbsp;
                          <>({productOption.purchase_price} BDT)</>
                        </option>
                      ))}
                  </select>
                </div>
              </td>

              <td>
                <div className="input-step d-flex justify-content-between align-items-center gap-1">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                      handleQuantityChange(index, product.quantity - 1)
                    }
                    disabled={product.quantity <= 0}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control invoice-product-quantity"
                    id={`product-qty-${index}`}
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value, 10))
                    }
                  />
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                      handleQuantityChange(index, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>

              <td>
                <input
                  type="number"
                  className={`form-control product-price`}
                  id={`productRate-${index}`}
                  step="0.01"
                  placeholder="0.00"
                  value={product.bdtRate}
                  onChange={(e) =>
                    handleRateChange(index, parseFloat(e.target.value))
                  }
                  required
                />
                <div className="invalid-feedback">Please enter a rate</div>
              </td>

              <td className="text-end">
                <div>
                  <input
                    type="text"
                    className="form-control invoice-product-line-price"
                    id={`productPrice-${index}`}
                    value={product.linePrice.toFixed(2)}
                    readOnly
                  />
                </div>
              </td>

              <td className="product-removal">
                <p
                  onClick={() => handleDeleteProduct(index)}
                  className="btn btn-danger my-0"
                  disabled={index === 0 || productList.length === 1}
                >
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p
        onClick={handleAddProduct}
        id="add-item"
        className="mt-3 btn btn-secondary"
      >
        Add Item
      </p>
    </div>
  );
};

export default PurchaseProductForm;
