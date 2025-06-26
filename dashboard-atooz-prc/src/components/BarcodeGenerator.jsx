import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import Barcode from "react-barcode";

const BarcodeGenerator = ({ value }) => {
  const barcodeOptions = {
    width: 1, // Set the width of the bars
    height: 40, // Set the height of the barcode
    fontSize: 8, // Set the font size for the text (if applicable)
  };

  return (
    <div>
      {/* Check if value is truthy before passing it to Barcode */}
      {value && <Barcode value={value} {...barcodeOptions} />}
    </div>
  );
};

// Define prop types for BarcodeGenerator component
BarcodeGenerator.propTypes = {
  value: PropTypes.string, // value prop is not required anymore
};

export default BarcodeGenerator;
