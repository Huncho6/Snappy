import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { useRef } from "react";
import Button from "./Button";
//designing a backdrop that is exportable 
const Backdrop = styled.div`     
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

//giving the backdrop power to the wrapper div to be able to modify it 
const Wrapper = styled(Backdrop)`
  .container {
    background: #fff;
    border-radius: 8px;
    width: 450px;
    height: 450px;
    padding: 24px;

    .header {
    display: flex;
    justify-content: space-between;
    gap: 30px;   
     align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 24px;
    }

    p {
    font-size: 24px;
    font-weight: 600;
    }
    MdCancel {
    cursor:
    }
  
  .content {
  padding: 24px;
  display: grid;
  gap: 24px;

  input {
  width: 100%;
  height: 50px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc
}
 form {
 display: grid;
 gap: 24px;
 }
 .profilePicture {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid #ff6f61;
  cursor: pointer;

  img{
  height: 100%;
  width:  100%;
  border-radius: 50%;
  object-fit: cover;
  }
 }
}
}

`;

interface CreateModalProps{
  setOpenCreateModal: (value: boolean) => void;
} 


const CreateModal = ({ setOpenCreateModal }: CreateModalProps) => {
  //using ref to understand image uploads 
  const inputRef = useRef(null);
  const handleImageUpload = () => {
    //@ts-ignore
    inputRef.current.click();
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <p>Create Post</p>
          {/* activating function to close modal  */}
        <MdCancel  color="#ff6f61" onClick={() => setOpenCreateModal(false)}/>
        </div>

        <div className="content">
          <div>
            <div className="profilePicture" onClick={handleImageUpload}>
              <img src="https://plus.unsplash.com/premium_photo-1723489337930-8bdd92bba034?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
            </div>
            {/* setting the form to display none and using inputing ref state to determine the type of file acceptable */}
            <input type="file" style={{display: "none"}} ref={inputRef} accept=".jpeg, .jpg, .png, .gif, .mp3, .mp4" />  
          </div>
          <form>
            <input type="text" placeholder="What on your mind"/>
            <input type="text" placeholder="What's your name" />

          <Button text="Create Post" />
          </form>
        </div>
        </div>
    </Wrapper>
  );
};

export default CreateModal;