import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FeedPage } from '../pages/FeedPage/FeedPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PostPage } from '../pages/PostPage/PostPage';
import { SingUpPage } from '../pages/SingUpPage/SingUpPage';
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import Header from '../components/Header/Header';

export default function Router () {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/cadastro'>
                    <SingUpPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/post/:id'>
                    <PostPage />
                </Route>
                <Route exact path='/'>
                    <FeedPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}