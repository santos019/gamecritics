import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* 내부 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 98;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
  z-index: 99;
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area">
            <Link to="/">Home</Link>
          </div>
          {children}
        </WhiteBox>
      </AuthTemplateBlock>
    </>
  );
};

export default AuthTemplate;
