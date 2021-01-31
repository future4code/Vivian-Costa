import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ListItemContainer = styled.div `
display: flex;
align-items: center;
border-bottom: 1px solid gray;

:hover {
    background-color: rgba(0,0,0,0.1)
}
`
const Avatar = styled.img `
border-radius: 50%;
margin-right: 8px;
height: 50px;
right: 50px;
`

export default function MatchListItem (props) {
    const profile = props.profile
    return (
        <ListItemContainer>
            <Avatar src={profile.photo} />
            <p>{profile.name}</p>
        </ListItemContainer>
    )
} 