import styled from "styled-components"
import Home from "./pages/home/Home";

const Wrapper = styled.div`
  background: #ff6f61;
  width: 100%;
  height: 100vh; /* Ensure full viewport height */
  

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

export default App;
