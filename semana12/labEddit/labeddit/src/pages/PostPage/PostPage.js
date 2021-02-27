import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { FormPost } from "./FormPost";
import {
  PostHeader,
  PostCard,
  PostContainer,
  PostText,
  PostFooter,
} from "./styled";

export function PostPage() {
  useProtectedPage();
  const params = useParams();
  const [posts, setposts] = useState({});
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setposts(res.data.post);
        setUserComments(res.data.post.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getAllComments = userComments.map((comment) => {
    return (
      <PostCard>
        <p key={comment.id} commentId={comment.id} postId={comment.id}></p>
        <PostHeader>
          <h2>{comment.username}</h2>
        </PostHeader>
        <PostText>
          <p>{comment.text}</p>
        </PostText>
        <PostFooter>
          <p>Total de Votos: {comment.votesCount}</p>
        </PostFooter>
      </PostCard>
    );
  });

  console.log(posts);

  return (
    <PostContainer>
      <PostCard>
        <PostHeader>
          <h1>{posts && posts.username}</h1>
        </PostHeader>
        <PostText>
          <p>{posts && posts.text}</p>
        </PostText>
        <PostFooter>
          <p>Comentarios: {posts && posts.commentsCount}</p>
          <p>Votos: {posts && posts.userVoteDirection}</p>
        </PostFooter>
      </PostCard>
      <di>
        {getAllComments}
        {getAllComments.length > 0 ? getAllComments : <Loading />}
      </di>
      <FormPost />
    </PostContainer>
  );
}
