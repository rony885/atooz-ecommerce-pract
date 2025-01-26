import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";
import Footer from "./components/Footer";

// Styled-components for the Error Page layout
const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 60px);
`;

const PageWrapper = styled.div`
  flex: 1;
`;

const FooterWrapper = styled.div`
  padding: 0px 20px;
`;

const ErrorIcon = styled(FaExclamationTriangle)`
  font-size: 5rem;
  color: #333;
  margin-bottom: 20px;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a5151;
  }
`;

const ErrorPages = () => {
  return (
    <Layout>
      <PageWrapper>
        <ErrorPageWrapper>
          <ErrorIcon className="mt-5" />
          <ErrorTitle>404 - Page Not Found</ErrorTitle>
          <ErrorMessage>
            Oops! The page you are looking for does not exist.
          </ErrorMessage>
          <BackButton to="/">Go Back Home</BackButton>
        </ErrorPageWrapper>
      </PageWrapper>
      <hr />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Layout>
  );
};

export default ErrorPages;
