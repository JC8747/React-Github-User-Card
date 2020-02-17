
import React from "react";
import Followers from "./Followers";
import styled from "styled-components";

const UserStyle = styled.div`
    background: #00f0e4;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
`;
const UserContainer = styled.div`
    width: 40%;
    margin: 0 auto;
    margin-top: 10px;
    background: #00f0e4;
`;

const UserCard = props => {
  return (
    <UserStyle>
      <UserContainer>
      <h2>{props.user.name}</h2>
      <img src={props.user.avatar_url} alt='Profile Avatar'/>
      <p>Bio:{props.user.bio}</p>
      </UserContainer>
      <Followers followers={props.followers} />
    </UserStyle>
  );
}

export default UserCard;