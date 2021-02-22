import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FeedPage } from '../pages/FeedPage/FeedPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PostPage } from '../pages/PostPage/PostPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';

export default function Router () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/cadastro'>
                    <RegisterPage />
                </Route>
                <Route exact path='/'>
                    <LoginPage />
                </Route>
                <Route exact path='/feed'>
                    <PostPage />
                </Route>
                <Route exact path='/posts'>
                    <FeedPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}