import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { FormPost } from "./FormPost";
import { MainContainer, PostContainer } from "./styled";

export function PostPage() {
  useProtectedPage();
  const params = useParams();
  const [posts, setposts] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setposts(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  return (
    <PostContainer>
      <MainContainer>
        <p>{posts && posts.username}</p>
        <p>{posts && posts.text}</p>
        <p>{posts && posts.commentsCount}</p>
        <p>{posts && posts.userVoteDirection}</p>
      </MainContainer>
      <FormPost />
    </PostContainer>
  );
}
