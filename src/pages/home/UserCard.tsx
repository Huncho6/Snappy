import { useState, useEffect } from "react";
import styled from "styled-components"; // importing styled component for styling
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import axios from "axios";

const Wrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: auto;
  margin-bottom: 15px;

  .profilePicture {
    width: 100%;
    border-radius: 8px 8px 0 0;

    img {
      width: 100%;
      height: 180px; /* Fixed height for image */
      border-radius: 8px 8px 0 0;
      object-fit: cover;
    }
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    text-align: center;

    .userName {
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      color: #555;
      margin-bottom: 16px;
    }

    .actionButtons {
      display: flex;
      justify-content: space-equally;
      gap: 15px;
      width: 100%;
      margin-top: auto;

      .likeContainer,
      .commentContainer {
        display: flex;
        justify-content: center;
        cursor: pointer;

        svg {
          width: 24px;
          height: 24px;
        }

        &:hover {
          color: #ff6f61;
        }
      }
    }
  }
`;

interface Post {
  id: string;
  _id: string;
  username: string;
  postDescription: string;
  postImage: string;
  likes: number;
  userHasLiked?: boolean; // Optional field to track if the user has liked the post
}

const UserCard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<{ data: Post[] }>("https://snappy-server-2.onrender.com/posts");
      console.log("Backend Data:", res.data.data); // Log the data from the backend
      setPosts(
        res.data.data.map((post) => ({
          ...post,
          id: post._id, // Map _id to id
          userHasLiked: false, // Initialize userHasLiked as false
        }))
      );
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const likePost = async (postId: string) => {
    console.log("Liking Post ID:", postId); // Verify postId here
    try {
      if (!postId) {
        console.error("Post ID is undefined");
        return;
      }
      const res = await axios.put<{ data: Post }>(
        `https://snappy-server-2.onrender.com/posts/${postId}/like`
      );
      const updatedPost = res.data.data;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...updatedPost, userHasLiked: !post.userHasLiked } // Toggle userHasLiked
            : post
        )
      );
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once.

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {posts.map((item) => (
        <Wrapper key={item.id}>
          <div className="profilePicture">
            <img src={item.postImage} alt="Post" />
          </div>

          <div className="content">
            <p className="userName">{item.username}</p>
            <p>{item.postDescription}</p>
            <div className="actionButtons">
              <div
                className="likeContainer"
                onClick={() => likePost(item.id)}
                style={{
                  color: item.userHasLiked ? "#ff6f61" : "inherit",
                }}
              >
                <CiHeart />
                <span>{item.likes}</span>
              </div>
              <div className="commentContainer">
                <FaRegComment />
              </div>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default UserCard;
