import styled from "styled-components";
import List from "./components/List";
import Cart from "./components/Cart";
import { ProductListProvider } from "./contexts/ProductListProvider";
import ConfirmOrderPopup from "./components/ConfirmOrderPopup";
import { useCart } from "./contexts/CartProvider";

const AppTitle = styled.h1`
  font-size: 2.5rem;
`;

const Container = styled.div`
  background-color: var(--rose-50);
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  max-width: 90rem;
  margin-inline: auto;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 5fr 2fr;
    align-items: start;
    gap: 3rem;
    padding: 5rem 2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

function App() {
  const { showPopup, handleResetOrder } = useCart();
  return (
    <ProductListProvider>
      <Container>
        <Wrapper>
          <div>
            <AppTitle>Desserts</AppTitle>
            <List />
          </div>

          <Cart />
        </Wrapper>
        {showPopup && <ConfirmOrderPopup />}
        {showPopup && <Overlay onClick={handleResetOrder} />}
      </Container>
    </ProductListProvider>
  );
}

export default App;
