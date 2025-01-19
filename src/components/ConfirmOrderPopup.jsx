import styled from "styled-components";
import { useCart } from "../contexts/CartProvider";
import ConfirmOrderPopupItem from "./ConfirmOrderPopupItem";
import { useProductList } from "../contexts/ProductListProvider";

const ConfirmOrderPopupContainer = styled.div`
  position: fixed;
  bottom: ${(props) => (props.isMobile ? "0" : "auto")};
  top: ${(props) => (props.isMobile ? "auto" : "50%")};
  left: ${(props) => (props.isMobile ? "0" : "50%")};
  width: ${(props) => (props.isMobile ? "100%" : "30rem")};
  transform: ${(props) => (props.isMobile ? "none" : "translate(-50%, -50%)")};
  height: fit-content;
  padding: 2rem;
  background-color: #fff;
  z-index: 10;
  padding-bottom: ${(props) => (props.isMobile ? "3rem" : "2rem")};
  border-radius: ${(props) => (props.isMobile ? ".5rem .5rem 0 0 " : ".5rem")};
`;

const AllDessertsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background-color: var(--rose-50);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-block: 1rem;
  overflow-y: scroll;
  max-height: 25rem;

  & > *:not(:last-child) {
    border-bottom: 0.8px solid var(--rose-100);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-top: 1.5rem;
`;

const Description = styled.p`
  color: var(--rose-400);
  margin-top: 0.5rem;
`;
const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  & p {
    color: var(--rose-500);
  }

  & h3 {
    font-size: 1.5rem;
  }
`;

const ConfirmOrderButton = styled.button`
  background-color: var(--red);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 100vw;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(149, 44, 12);
  }
`;

function ConfirmOrderPopup() {
  const { cart, handleResetOrder } = useCart();
  const { isMobile } = useProductList();

  return (
    <ConfirmOrderPopupContainer isMobile={isMobile}>
      <img src="./images/icon-order-confirmed.svg" alt="" />
      {isMobile ? (
        <Title>
          Order<br></br> Confirmed
        </Title>
      ) : (
        <Title>Order Confirmed</Title>
      )}
      <Description>We hope you enjoy your food!</Description>
      <AllDessertsContainer>
        {cart.map((dessert) => (
          <ConfirmOrderPopupItem key={dessert.id} dessert={dessert} />
        ))}
        <OrderTotal>
          <p>Order Total</p>
          <h3>
            ${cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}
          </h3>
        </OrderTotal>
      </AllDessertsContainer>

      <ConfirmOrderButton onClick={handleResetOrder}>
        Start New Order
      </ConfirmOrderButton>
    </ConfirmOrderPopupContainer>
  );
}

export default ConfirmOrderPopup;
