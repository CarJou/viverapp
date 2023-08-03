"use client";

import Image from "next/image";
import styled from "styled-components";
import { useModal } from "@ebay/nice-modal-react";
import BuyModal from "../Modal/buy-modal";

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const StyledWrapper = styled.div`
  max-width: 300px;
  border-radius: 50px;
  background: #abd1c6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  gap: 10px;
  justify-content: space-between;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: -8px 9px 44px -3px rgba(0, 0, 0, 0.53);
    -webkit-box-shadow: -8px 9px 44px -3px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: -8px 9px 44px -3px rgba(0, 0, 0, 0.53);
  }
`;

const StyledTitle = styled.h1`
  color: #001e1d;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

const StyledSubtitle = styled.h2`
  color: #0f3433;
  font-weight: 400;
  font-size: 16px;
`;
const StyledImage = styled.div``;

const StyledButton = styled.button`
  color: #001e1d;
  background: #f9bc60;
  padding: 15px 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.1s ease;

  &:hover {
    font-weight: 900;
    background: #f7b44f;
  }
`;

const Card = ({ title, subtitle, imageUrl }: Props) => {
  const { show: showBuyModal } = useModal(BuyModal);

  const handleShowModal = () => {
    showBuyModal();
  };
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledImage>
        <Image src={imageUrl} alt={title} width={150} height={200} />
      </StyledImage>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledButton onClick={handleShowModal}>Agregar al carrito</StyledButton>
    </StyledWrapper>
  );
};

export default Card;
