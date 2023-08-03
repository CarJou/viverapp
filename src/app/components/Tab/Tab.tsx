"use client";

import React, { useState } from "react";
import TabContent from "./TabContent";
import Card from "../Card/Card";
import styled from "styled-components";
import tabData from "../../utils/tabUtils";

type TabName = keyof typeof tabData;

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const StyledTabContent = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  gap: 20px;
  margin-top: 20px;
`;

const Tab = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Tab1");

  const handleTabChange = (tabName: TabName) => {
    setActiveTab(tabName);
  };

  const activeTabData = tabData[activeTab];



  return (
    <StyledWrapper>
      {Object.entries(tabData).map(([tabName, tabInfo]) => (
        <TabContent
          key={tabName}
          tabName={tabInfo.content}
          isActive={activeTab === tabName}
          onClick={() => handleTabChange(tabName as TabName)}
        />
      ))}
      {Object.keys(tabData).map((tabName) => (
        <StyledTabContent
          isActive={activeTab === (tabName as TabName)}
          key={tabName}
        >
          {activeTabData.cards.map(
            (
              card: {
                title: string;
                subtitle: string;
                buttonText: string;
                imageUrl: string; 
              },
              index: React.Key | null | undefined
            ) => (
              <Card
                title={card.title}
                subtitle={card.subtitle}
                imageUrl={card.imageUrl}
                key={index}
              />
            )
          )}
        </StyledTabContent>
      ))}
    </StyledWrapper>
  );
};

export default Tab;
