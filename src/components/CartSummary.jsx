import styled from "styled-components";
import { useCart } from "../contexts/CartProvider";

const CarbonNeutralDelivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--rose-50);
  padding: 0.75rem;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 0.5rem;

  & p {
    font-size: 0.8rem;
    font-weight: 400;
  }

  & span {
    font-weight: 600;
  }
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  margin-block: 0.5rem 1.5rem;

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
    background-color: rgb(149,44,12);
  }
`;

function CartSummary() {
  const { cart, setShowPopup } = useCart();

  return (
    <div>
      <OrderTotal>
        <p>Order Total</p>
        <h3>
          ${cart.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}
        </h3>
      </OrderTotal>
      <CarbonNeutralDelivery>
        <img src="./images/icon-carbon-neutral.svg" alt="" />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </CarbonNeutralDelivery>
      <ConfirmOrderButton onClick={() => setShowPopup(true)}>
        Confirm Order
      </ConfirmOrderButton>
    </div>
  );
}

export default CartSummary;
