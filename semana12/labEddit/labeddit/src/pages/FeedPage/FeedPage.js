import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/url";
import { FeedPageContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { goToPostPage } from "../../routes/Coordinator";
import axios from "axios";
import { FormFeed } from "./FormFeed";

export function FeedPage() {
  useProtectedPage();
  const history = useHistory();


  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFeeds(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postPage = (id) => {
    goToPostPage(history, id);
  };

  const allFeed = feeds.map((feed) => {
    return (
      <FeedPageContainer key={feed.id} onClick={() => postPage(feed.id)}>
        <p>Usuario: {feed.username} </p>
        <p>Postagem: {feed.text}</p>
        <p>Votos: {feed.userVoteDirection}</p>
        <p>Total de Comentarios: {feed.commentsCount}</p>
        <p>Total de Votos {feed.votesCount} </p>
      </FeedPageContainer>
    );
  });

  return (
    <FeedPageContainer>
      <FormFeed />
      {allFeed}
    </FeedPageContainer>
  );
}
