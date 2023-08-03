"use client";

import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

const StyledTitle = styled.h1`
  color: #fffffe;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
`;

const StyledSubtitle = styled.h2`
  color: rgb(171, 209, 198);
  font-weight: 400;
  font-size: 19px;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Miller</StyledTitle>
      <StyledSubtitle>
        Te ayudamos a elegir tú próxima planta. Ahora podés comprar nuestros
        productos seleccionados sin moverte de tu casa!
      </StyledSubtitle>
    </StyledWrapper>
  );
};

export default Header;
