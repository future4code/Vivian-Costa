import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ListItemContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
display: flex;
align-items: center;
border-bottom: 1px solid gray;
:hover {
    background-color: rgba(0,0,0,0.1)
}
`
const Avatar = styled.img `
border-radius: 50%;
border: 2px solid white;
margin-right: 8px;
height: 100px;
right: 50px;
`
const NameMatch = styled.p `
font-family: 'Francois One', sans-serif;
font-size: 1.5em;
background: -webkit-linear-gradient(left, RGB(32, 2, 36) 50%, RGB(139, 17, 156) 50%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline;
`

export default function MatchListItem (props) {
    const profile = props.profile
    return (
        <ListItemContainer>
            <Avatar src={profile.photo} />
            < NameMatch>{profile.name}</ NameMatch>
        </ListItemContainer>
    )
} 