"use client";

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ $activeTab: boolean }>`
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-right: 30px;
  padding-bottom: 5px;
  transition: all 0.1s ease;
  border-bottom: 4px solid ${({ $activeTab }) => $activeTab && "#abd1c6"};
  color: ${({ $activeTab }) => ($activeTab ? "#abd1c6" : "#fffffe")};
`;


interface TabProps {
  isActive: boolean;
  tabName: string;
  onClick: () => void;
}

const TabContent = ({
  isActive,
  tabName,
  onClick,
}: TabProps) => {
  return (
    <>
        <StyledButton $activeTab={isActive} onClick={onClick}>
          {tabName}
        </StyledButton>
    </>
  );
};

export default TabContent;
