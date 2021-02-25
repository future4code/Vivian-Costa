import React from "react";
import { Switch, Route } from "react-router-dom";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { SingUpPage } from "../pages/SingUpPage/SingUpPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export default function Router({setRightButtonText}) {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage  setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/cadastro">
        <SingUpPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/">
        <FeedPage />
      </Route>
      <Route exact path="/post/:id">
        <PostPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}
