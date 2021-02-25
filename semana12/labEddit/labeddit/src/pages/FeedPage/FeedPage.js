import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { FeedPageContainer } from "./styled";

export function FeedPage() {
  useProtectedPage();
  const feeds = useRequestData([], `${BASE_URL}/posts`);
  console.log(feeds);

  const allFeed = feeds.map((feed) => {
    return (
      <FeedPageContainer>
        <p>Nome usuario: {feed.username}</p>
        <p>Texto: {feed.text}</p>
        <p>Votos: {feed.userVoteDirection}</p>
        <p>Total de comentarios: {feed.commentsCount}</p>
        <p>total de votos: {feed.votesCount}</p>
        <p>{feed.id}</p>
      </FeedPageContainer>
    );
  });

  return <div>
      <textarea
      name="text"
      placeholder="crie seu post aqui!"
      >
      </textarea>
      <button>Criar Post</button>
      {allFeed}
      
      </div>;
 
}
