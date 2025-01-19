/* eslint-disable react/prop-types */

import styled from "styled-components";
import { useCart } from "../contexts/CartProvider";
import { useProductList } from "../contexts/ProductListProvider";

const ItemContainer = styled.div`
  display: grid;
  gap: 2.5rem;
`;

const ImageWithButtonContainer = styled.div`
  position: relative;
`;

const ButtonAddToCart = styled.button`
  display: flex;
  gap: 0.75rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0.75rem 1.5rem;
  width: max-content;
  border-radius: 100vw;
  border: none;
  background-color: #fff;
  border: 1px solid var(--rose-400);
  cursor: pointer;
`;

const ButtonAddMoreToCart = styled(ButtonAddToCart)`
  align-items: center;
  gap: 2.5rem;
  padding: 0.6rem 1.2rem;
  background-color: var(--red);
  border: 1px solid var(--rose-400);
  cursor: pointer;
  color: #fff;
  font-weight: 600;
`;

const DessertImage = styled.img`
  border-radius: 0.5rem;
`;

const DessertData = styled.div`
  display: grid;
  gap: 0.15rem;
`;

const DessertCategory = styled.p`
  color: var(--rose-400);
  font-weight: 500;
`;

const DessertTitle = styled.h3`
  font-weight: 600;
`;

const DessertPrice = styled.p`
  color: var(--red);
  font-weight: 500;
`;

const ImageChangeQuantity = styled.img`
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 100vw;
  height: 1.2rem;
  aspect-ratio: 1/1;
  padding: 0.2rem;
`;

function ListItem({ dessert }) {
  const {
    handleAddToCart,
    cart,
    handleDecrementQuantity,
    handleIncrementQuantity,
  } = useCart();

  const { isMobile } = useProductList();

  const dessertCount =
    cart.find((item) => item.name === dessert.name)?.count || 0;

  const dessertId = cart.find((item) => item.name === dessert.name)?.id || null;

  if (!dessert) return null;
  const newDessert = {
    id: Math.random() + Date.now(),
    thumbnail: dessert.image.thumbnail,
    name: dessert.name,
    price: dessert.price,
    count: 1,
    totalPrice: dessert.price * 1,
  };

  return (
    <ItemContainer>
      <ImageWithButtonContainer>
        <DessertImage
          src={isMobile ? dessert.image.mobile : dessert.image.desktop}
          alt={dessert.name}
          className={`${dessertCount ? "redBorderAroundDessert" : ""}`}
        />
        {dessertCount === 0 ? (
          <ButtonAddToCart onClick={() => handleAddToCart(newDessert)}>
            <img src="./images/icon-add-to-cart.svg" alt="cart icon" />
            <span>Add to cart</span>
          </ButtonAddToCart>
        ) : (
          <ButtonAddMoreToCart>
            <ImageChangeQuantity
              onClick={() => handleDecrementQuantity(dessertId)}
              src="./images/icon-decrement-quantity.svg"
              alt="cart icon"
            />
            <span>{dessertCount}</span>
            <ImageChangeQuantity
              onClick={() => handleIncrementQuantity(dessertId)}
              src="./images/icon-increment-quantity.svg"
              alt="cart icon"
            />
          </ButtonAddMoreToCart>
        )}
      </ImageWithButtonContainer>

      <DessertData>
        <DessertCategory>{dessert.category}</DessertCategory>
        <DessertTitle>{dessert.name}</DessertTitle>
        <DessertPrice>${dessert.price.toFixed(2)}</DessertPrice>
      </DessertData>
    </ItemContainer>
  );
}

export default ListItem;
