// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import TopUp from "./TopUp";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <Wrapper>
//       <div className="footer">
//         <div className="d-flex justify-content-between align-items-center ">
//           <div className="" style={{ fontSize: "11px" }}>
//             {currentYear} &copy; Atooz
//           </div>

//           <div className="">
//             <span style={{ fontSize: "11px" }}>Design & Develop by</span>
//             <Link
//               to="http://www.ekattorit.com/"
//               target="_blank"
//               style={{ color: "red" }}
//               className="link"
//             >
//               &nbsp;EKATTOR <span style={{ color: "green" }}>iT</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <TopUp/>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .link {
//     text-decoration: none !important;
//     font-size: 11px !important;
//   }
// `;

// export default Footer;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import TopUp from "./TopUp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="footer">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="text-small">{currentYear} &copy; Atooz</div>

          <div className="text-small">
            <span>Design & Develop by</span>
            <Link
              to="http://www.ekattorit.com/"
              target="_blank"
              className="link"
            >
              &nbsp;EKATTOR <span className="it-text">iT</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Render the TopUp component */}
      {/* <TopUpWrapper>
        <TopUp />
      </TopUpWrapper> */}
    </Wrapper>
  );
};

// Styled-components for Footer styling
const Wrapper = styled.section`
  .footer {
    padding: 20px;
    background-color: #f8f9fa;
  }

  .text-small {
    font-size: 11px;
  }

  .link {
    text-decoration: none !important;
    font-size: 11px !important;
    color: red;

    .it-text {
      color: green;
    }
  }
`;

// const TopUpWrapper = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   z-index: 1000;
// `;

export default Footer;
