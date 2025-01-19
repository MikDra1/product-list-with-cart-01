import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div`
  border: 1rem solid rgba(0, 0, 0, 0.1);
  border-top: 1rem solid var(--red);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Spinner() {
  return <SpinnerStyled />;
}

export default Spinner;
