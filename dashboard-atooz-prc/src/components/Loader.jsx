import React from "react";
import { Bars } from "react-loader-spinner"; // Import the Bars loader

// Centered Loader Component
const Loader = () => {
    return (
        <div style={styles.loaderContainer}>
            <Bars
                height="80"
                width="80"
                color="#D50100"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

// Styles for centering the loader
const styles = {
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
    },
};

export default Loader;
