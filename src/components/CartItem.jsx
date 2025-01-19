/* eslint-disable react/prop-types */

import styled from "styled-components";
import { useCart } from "../contexts/CartProvider";

const DessertData = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const DessertCount = styled.span`
  color: var(--red);
`;

const DessertPrice = styled.p`
  display: flex;
  gap: 0.5rem;
  color: var(--rose-400);

  & span:nth-child(2) {
    color: var(--rose-500);
    font-weight: 600;
  }
`;

const DessertTitle = styled.h4`
  font-size: 0.938rem;
  font-weight: 600;
`;

const ImageRemoveItem = styled.img`
  border: 1px solid var(--rose-400);
  border-radius: 100vw;
  padding: 0.25rem;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    filter: brightness(0)
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function CartItem({ dessert }) {
  const { handleDeleteFromTheCart } = useCart();

  return (
    <Flex>
      <div>
        <DessertTitle>{dessert.name}</DessertTitle>
        <DessertData>
          <DessertCount>{dessert.count}x</DessertCount>
          <DessertPrice>
            <span>@ ${dessert.price.toFixed(2)}</span>
            <span>${dessert.totalPrice.toFixed(2)}</span>
          </DessertPrice>
        </DessertData>
      </div>
      <ImageRemoveItem
        onClick={() => handleDeleteFromTheCart(dessert.id)}
        src="./images/icon-remove-item.svg"
        alt="delete icon"
      />
    </Flex>
  );
}

export default CartItem;
