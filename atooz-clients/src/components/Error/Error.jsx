// import React from "react";
// import "./error.css";

// const Error = () => {
//   return (
//     <div>
//       <h1>Error</h1>
//     </div>
//   );
// };

// export default Error;


import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Keyframes for the slide-in animation
const slideIn = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Keyframes for the pulsate animation
const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Wrapper styled-component with fade-in animation
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e2e5e9;
  color: #721c24;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

// Title styled-component with slide-in animation
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${slideIn} 1s ease-in-out;
`;

// Message styled-component with slide-in animation
const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: ${slideIn} 1s ease-in-out 0.5s;
`;

// HomeButton styled-component with a pulsate animation
const HomeButton = styled.a`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f5c6cb;
  color: #721c24;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  animation: ${pulsate} 1.5s infinite;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f1b0b7;
    transform: scale(1.1);
  }
`;

const Error = () => {
  return (
    <Wrapper>
      <Title>Oops! Something went wrong.</Title>
      <Message>We can't find the page you're looking for.</Message>
      <HomeButton href="/">Go Back Home</HomeButton>
    </Wrapper>
  );
};

export default Error;
