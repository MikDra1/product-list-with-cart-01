import styled from "styled-components";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.cartLength === 0 && "center"};
  gap: 1.5rem;
  background-color: #fff;
  margin-block: 2rem;
  padding: 1.5rem 2rem 2rem 2rem;
  border-radius: 0.5rem;

  & h2 {
    align-self: flex-start;
    color: var(--red);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const EmptyCartDescription = styled.p`
  color: var(--rose-400);
  font-weight: 600;
  font-size: 0.875rem;
`;

const CartWrapper = styled.div`
  display: grid;
  gap: 1rem;

  & > *:not(:last-child) {
    border-bottom: 0.8px solid var(--rose-100);
  }
`;

function Cart() {
  const { cart } = useCart();

  return (
    <CartContainer cartLength={cart.length}>
      <h2>Your Cart ({cart.reduce((acc, item) => acc + item.count, 0)})</h2>

      {cart.length > 0 ? (
        <CartWrapper>
          {cart.map((dessert) => (
            <CartItem key={dessert.id} dessert={dessert} />
          ))}
          <CartSummary />
        </CartWrapper>
      ) : (
        <Wrapper>
          <img src="./images/illustration-empty-cart.svg" alt="" />
          <EmptyCartDescription>
            Your added items will appear here
          </EmptyCartDescription>
        </Wrapper>
      )}
    </CartContainer>
  );
}

export default Cart;
