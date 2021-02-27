import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/url";
import {
  FeedContainer,
  FeedHeader,
  FeedFooter,
  FeedCard,
  FeedText,
} from "./styled";
import { useHistory } from "react-router-dom";
import { goToPostPage } from "../../routes/Coordinator";
import axios from "axios";
import { FormFeed } from "./FormFeed";
import { Loading } from "../../components/Loading/Loading";

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
      <FeedCard>
        <div key={feed.id} onClick={() => postPage(feed.id)}>
          <FeedHeader>
            <h1>{feed.username} </h1>
          </FeedHeader>
          <FeedText>
            <p>{feed.text}</p>
          </FeedText>

          <FeedFooter>
            <p>Votos: {feed.userVoteDirection}</p>
            <p>Comentarios: {feed.commentsCount}</p>
            <p>Total de Votos {feed.votesCount} </p>
          </FeedFooter>
        </div>
      </FeedCard>
    );
  });

  return (
    <FeedContainer>
      <FormFeed />
      {allFeed}
      {allFeed.length > 0 ? allFeed : <Loading />}
    </FeedContainer>
  );
}
