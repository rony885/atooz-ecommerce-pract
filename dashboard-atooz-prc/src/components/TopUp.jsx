// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import styled from "styled-components";

// const TopUpButton = styled.button`
//   position: fixed;
//   bottom: 40px;
//   right: 30px;
//   width: 50px;
//   height: 50px;
//   background-color: #263042;
//   color: white;
//   border: none;
//   border-radius: 50%;
//   display: ${({ visible }) => (visible ? "inline" : "none")};
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #263042;
//   }
// `;

// const TopUp = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 50) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <TopUpButton onClick={scrollToTop} visible={visible}>
//       <FaArrowUp />
//     </TopUpButton>
//   );
// };

// export default TopUp;

// import React, { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import styled from "styled-components";

// const TopUp = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <TopUpButton onClick={scrollToTop} visible={isVisible}>
//       <FaArrowUp />
//     </TopUpButton>
//   );
// };

// const TopUpButton = styled.button`
//   position: fixed;
//   bottom: 40px;
//   right: 30px;
//   width: 50px;
//   height: 50px;
//   background-color: #263042;
//   color: white;
//   border: none;
//   border-radius: 50%;
//   justify-content: center;
//   align-items: center;
//   font-size: 18px;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #263042;
//   }
// `;

// export default TopUp;

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const TopUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Button onClick={scrollToTop}>
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #263042;
  color: white;
  border: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  z-index: 1000 !important;

  &:hover {
    background-color: #263042;
  }
`;

export default TopUp;
