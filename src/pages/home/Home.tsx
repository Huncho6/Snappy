import styled from "styled-components";
import AppHeader from "./AppHeader";
import Content from "./Content";
import UserCard from "./UserCard";
import ActionCenter from "./ActionCenter";
import { useState } from "react";
import CreateModal from "./CreateModal";

const Wrapper = styled.div`
 background: #fff;
 width: 25%;
 height: 100vh;
 margin: 0 auto;


 @media screen and (max-width: 768px) {
    width: 100%;
 }
`


const Home = () => {
  //defining modal props before passing them as a parameters in our open and close functions 
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  return (
    <Wrapper>
      <AppHeader />
      <ActionCenter setOpenCreateModal={setOpenCreateModal} />
      <Content />
      {openCreateModal && <CreateModal setOpenCreateModal={setOpenCreateModal}/>}
      <UserCard />
    </Wrapper>
  )
}

export default Home;
