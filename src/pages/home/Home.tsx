import styled from "styled-components";
import AppHeader from "./AppHeader";
import Content from "./Content";
import ActionCenter from "./ActionCenter";
import { useState } from "react";
import CreateModal from "./CreateModal";

const Wrapper = styled.div`
  background: #fff;
  width: 40%;
  height: 100%; /* Use 100% height to fill the parent's height */
  margin: 0 auto;
  position: relative;
  overflow-y: scroll; /* Allow vertical scrolling */

  .header {
    position: sticky;
    top: 0;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Home = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="header">
        <AppHeader />
        <ActionCenter setOpenCreateModal={setOpenCreateModal} />
      </div>
      <Content />
      {openCreateModal && <CreateModal setOpenCreateModal={setOpenCreateModal} />}
    </Wrapper>
  );
}

export default Home;
