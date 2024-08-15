import styled from "styled-components"
import Button from "./Button";

const Wrapper = styled.div`
padding: 24px;
display: flex;
gap: 24px;
height: 100px;
`;

interface ActionCenterProps{
  setOpenCreateModal: (value: boolean) => void; //means true or false(used to handle open and close buttons)
} 

const ActionCenter = ({ setOpenCreateModal }: ActionCenterProps ) => { //passing setopenmodal as a parameter to be able to use as a function for button 
  return (
    <div>
      <Wrapper>
      <Button text="Create" onClick={() => setOpenCreateModal(true)} />   
      {/* using the setopenmodal here as true to be able to open modal */}
      <Button text="Refresh" />
      </Wrapper>
    </div>
  )
}

export default ActionCenter;
