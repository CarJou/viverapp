import NiceModal, { useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";
import { toast } from "react-toastify";

const StyledWrapper = styled.div`
  z-index: 99;
  background: #e8e4e6;
  position: fixed;
  top: 30%;
  left: 35%;
  height: 40%;
  max-width: 400px;
  border-radius: 50px;
  box-shadow: -4px 6px 41px 0px rgba(0, 0, 0, 0.65);
  -webkit-box-shadow: -4px 6px 41px 0px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: -4px 6px 41px 0px rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 45px;
  gap: 25px;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  color: #001e1d;
  font-weight: 800;
  font-size: 24px;
  text-align: center;
`;

const StylerButtonContent = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

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

const StyledLabel = styled.label`
  color: #0f3433;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: #004643;
    font-weight: 700;
  }
`;

const BuyModal = NiceModal.create(() => {
  const { remove } = useModal();

  const handleRemove = () => {
    toast.error("Ups, todavía no desarrollé esta función :( sorry");
  };
  const handleError = () => {
    remove();
  };
  return (
    <StyledWrapper>
      <StyledTitle>Genial, lo agregaste al carrito :)</StyledTitle>
      <StylerButtonContent>
        <StyledButton onClick={handleRemove}>Iniciar compra</StyledButton>
        <StyledLabel onClick={handleError}>Seguir comprando</StyledLabel>
      </StylerButtonContent>
    </StyledWrapper>
  );
});

export default BuyModal;
