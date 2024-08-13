import styled from "styled-components";//importing styled component for styling

const Wrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 24px;
  height: 300px;
  display: flex;
  flex-direction: column;

 .profilePicture {
  height: 70%;
  width: 100%;
  border-radius: 8px 8px 0 0;


  img{
  height: 100%;
  width:  100%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  }
 }

`;

const UserCard = () => {
  return (
    <Wrapper>
      <div className="profilePicture">
        <img src="https://plus.unsplash.com/premium_photo-1723489337930-8bdd92bba034?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
      </div>
    </Wrapper>
  )
}

export default UserCard;
