import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
  background-image: radial-gradient(
      at 47% 33%,
      hsl(0, 0%, 5%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(260.94, 91%, 32%) 0, transparent 55%);
  min-height: 100vh;
  overflow-x: hidden;
`;
