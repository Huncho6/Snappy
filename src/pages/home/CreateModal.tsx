import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { useRef, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { IoPerson } from "react-icons/io5";
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
    width: 500px;
    height: 500px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 24px;

      p {
        font-size: 24px;
        font-weight: 600;
      }
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
        border: 1px solid #ccc;
      }

      textarea {
        width: 100%;
        height: 100px;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid #ccc;
      }

      .formArea {
        display: grid;
        gap: 24px;
      }

      .profilePicture {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 3px solid #ff6f61;
        cursor: pointer;

        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
      }
    }
  }
`;

interface CreateModalProps {
  setOpenCreateModal: (value: boolean) => void;
}

const CreateModal = ({ setOpenCreateModal }: CreateModalProps) => {
  const inputRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    //@ts-ignore
    inputRef.current.click();
  };

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);

    try {
      const res = await axios.post("https://snappy-server-2.onrender.com/upload", formData);
      console.log("response", res);
      setImage(res?.data.url);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCreatePost = async () => {
    try {
      const res = await axios.post("https://snappy-server-2.onrender.com/create-post", {
        username: userName,
        postDescription: postContent,
        postImage: image,
      });
      console.log("response", res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <p>Create post</p>
          <MdCancel color="#ff6f61" onClick={() => setOpenCreateModal(false)} />
        </div>

        <div className="content">
          <div>
            <div className="profilePicture" onClick={handleImageClick}>
              {image ? (
                <img className="userImage" src={image} alt="" />
              ) : (
                <IoPerson className="userImage" />
              )}
            </div>
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputRef}
              onChange={(e) => handleImageUpload(e)}
              accept=".jpeg, .jpg, .png, .gif, .mp4"
            />
          </div>
          <div className="formArea">
            <textarea
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Whats on your mind?"
            />
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Whats your name"
            />

            <Button
              text="Create post"
              height="50px"
              disabled={!postContent || !image}
              onClick={handleCreatePost}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CreateModal;