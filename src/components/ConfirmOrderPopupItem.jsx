/* eslint-disable react/prop-types */

import styled from "styled-components";

const DessertData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const DessertDataFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
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

const Flex = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const ThumbnailImage = styled.img`
  width: 3.5rem;
  border-radius: 0.5rem;
`;

const DessertTotalPrice = styled.p`
  font-weight: 600;
`;

const FlexWithImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function ConfirmOrderPopupItem({ dessert }) {

  return (
    <Flex>
      <FlexWithImage>
        <div>
          <ThumbnailImage src={dessert.thumbnail} alt="" />
        </div>
        <DessertDataFlex>
          <DessertTitle>{dessert.name.length > 15 ? dessert.name.slice(0, 15) + "..." : dessert.name}</DessertTitle>
          <DessertData>
            <DessertCount>{dessert.count}x</DessertCount>
            <DessertPrice>
              <span>@ ${dessert.price.toFixed(2)}</span>
            </DessertPrice>
          </DessertData>
        </DessertDataFlex>
      </FlexWithImage>
      <div>
        <DessertTotalPrice>${dessert.totalPrice.toFixed(2)}</DessertTotalPrice>
      </div>
    </Flex>
  );
}

export default ConfirmOrderPopupItem;
