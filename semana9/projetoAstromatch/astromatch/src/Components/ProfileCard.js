import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ProfileContainer = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
margin: 16px;
// border: 1px solid black;
`
const ProfilePicture = styled.img `
width:100%;
height:60%;
display: block;
max-height: 350px;
`
const ProfileInfo = styled.div `
padding: 0 16px;
`
const TextCard = styled.p `
font-family: 'Cardo', serif;
text-align: center;
font-size: 20px;
`

export default function ProfileCard (props) {
    const profile = props.profile
    return (
        <ProfileContainer>
            <ProfilePicture src={profile.photo} />
            <ProfileInfo>
                <TextCard>{profile.name}, {profile.age}</TextCard>
                <TextCard>{profile.bio}</TextCard>
            </ProfileInfo>
        </ProfileContainer>
    )
} 