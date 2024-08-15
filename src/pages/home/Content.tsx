import styled from "styled-components";
import UserCard from "./UserCard";


const Wrapper = styled.div`
padding: 24px;
// max-height: calc(100vh-200px);
`;

const Content = () => {
  return (
    <Wrapper>
      <UserCard />
      <UserCard />
      <UserCard />
    </Wrapper>
  )
}

export default Content
