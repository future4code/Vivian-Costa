import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ProfileContainer = styled.div `
margin: 16px;
border: 1px solid black;
`
const ProfilePicture = styled.img `
width: 100%;
display: block;
max-height: 350px;
`
const ProfileInfo = styled.div `
padding: 0 16px;
`

export default function ProfileCard (props) {
    const profile = props.profile
    return (
        <ProfileContainer>
            <ProfilePicture src={profile.photo} />
            <ProfileInfo>
                <p>{profile.name},{profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileInfo>
        </ProfileContainer>
    )
} 